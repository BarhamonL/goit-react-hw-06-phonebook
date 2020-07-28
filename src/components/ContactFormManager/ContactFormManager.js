import React from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import Layout from "../common/Layout";
import Section from "../common/Section";
import ContactEditor from "../ContactEditor";
import ContactList from "../ContactList";
import Filter from "../Filter";
import ThemeToggler from "../ThemeToggler";
import ThemeContext from "../../context/ThemeContext";

import "react-toastify/dist/ReactToastify.css";

const ContactFormManager = ({ contacts }) => {
  return (
    <ThemeContext>
      <Layout>
        <ThemeToggler />
        <div className="Contact-FormManager">
          <Section title="Phonebook">
            <ContactEditor />
          </Section>
          {contacts.length > 0 && (
            <Section title="Contacts">
              {contacts.length > 1 && <Filter />}
              <ContactList />
            </Section>
          )}
        </div>
        <ToastContainer />
      </Layout>
    </ThemeContext>
  );
};

const mapStateToProps = (state) => {
  const contacts = state.contacts.items;
  return { contacts };
};
export default connect(mapStateToProps)(ContactFormManager);
