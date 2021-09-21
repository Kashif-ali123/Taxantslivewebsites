
import { Collapse, Button } from 'antd';
import {FooterContainer} from '../containers/footer';

import React from "react";
import Accordion from "../components/accordion";
import AboutUs from "../content/aboutus";
import Services from "../content/services";
import ContactUs from "../content/contactus";
import Tax from '../content/Tax';
import Enrolment from '../content/Enrolment';
import Eligible from '../content/Eligible';
import Filing from '../content/Filing';
import Income from '../content/Income';
import Receive from '../content/Receive';
import Date from '../content/Date';
import Insurance from '../content/Insurance';
import Return from '../content/Return';
import Rates from '../content/Rates';
import Refuned from '../content/Refuned';
import  File  from '../content/File';
import Deadline from '../content/Deadline';
import Dedication from '../content/Dedication';
import Student from '../content/Student';
import Refund from '../content/Refund';
import Get from '../content/Get';
import Yeartaxes from '../content/Yeartaxes';
import Spouse from '../content/Spouse';

const data = [
  { id: 1, name: "How income tax works?", content: () => <AboutUs />, state: "active" },
  { id: 2, name: "Why do we need to file return?", content: () => <Services />, state: "inactive" },
  {
    id: 3,
    name: "When will I receive my tax return?",
    content: () => <ContactUs />,
    state: "inactive",
  },
  {
    id: 4,
    name: "What happens after I file my tax return?",
    content: () => <Tax />,
    state: "inactive",
  },
  {
    id: 5,
    name: "What is a Tuition and Enrolment Certificate (T2202A)?",
    content: () => <Enrolment />,
    state: "inactive",
  },
  {
    id: 6,
    name: "What is a Notice of Assessment?",
    content: () => <Enrolment />,
    state: "inactive",
  },
  {
    id: 7,
    name: "Who all are eligible to file a return?",
    content: () => <Eligible />,
    state: "inactive",
  },
  {
    id: 8,
    name: "What are the benefits of filing my taxes?",
    content: () => <Filing />,
    state: "inactive",
  },
  {
    id: 9,
    name: "As an international student, am I required to file income taxes?",
    content: () => <Income />,
    state: "inactive",
  },
  {
    id: 10,
    name: "If I did not receive income in Canada, why should I complete a tax return?",
    content: () => <Receive />,
    state: "inactive",
  },
  {
    id: 11,
    name: "What is the last date to file a return?",
    content: () => <Date />,
    state: "inactive",
  },
  {
    id: 12,
    name: "Can I file my income tax return if I don’t have a Social Insurance Number?",
    content: () => <Insurance />,
    state: "inactive",
  },
  {
    id: 13,
    name: "Where to go to file a return?",
    content: () => <Return />,
    state: "inactive",
  },
  {
    id: 14,
    name: "What are the income tax rates?",
    content: () => <Rates />,
    state: "inactive",
  },
  {
    id: 15,
    name: "How long does it take for tax refund?",
    content: () => <Refuned />,
    state: "inactive",
  },
  {
    id: 16,
    name: "Are there any benefits to file return early?",
    content: () => <File />,
    state: "inactive",
  },
  {
    id: 17,
    name: "What happens if I file after the deadline?",
    content: () => <Deadline />,
    state: "inactive",
  },
  {
    id: 18,
    name: "What receipts are required to keep with us throughout the year, which will help to get deductions while filing return?",
    content: () => <Dedication/>,
    state: "inactive",
  },
  {
    id: 19,
    name: "What are the eligible deductions students get while filing a return?",
    content: () => <Student/>,
    state: "inactive",
  },
  {
    id: 20,
    name: "When will I get my refund?",
    content: () => <Refund/>,
    state: "inactive",
  },
  {
    id: 21,
    name: "How much will I get?",
    content: () => <Get/>,
    state: "inactive",
  },
  {
    id: 22,
    name: "I didn’t file my income taxes in previous years. Can I file taxes for past years now?",
    content: () => <Yeartaxes/>,
    state: "inactive",
  },
  {
    id: 23,
    name: "My spouse is not in Canada, can I still claim them on my tax return?",
    content: () => <Spouse/>,
    state: "inactive",
  },
];

function Development() {
  return (
    <>
    <h1 style={{marginTop:"100px", fontSize:"40px", fontFamily:"Open Sans sans-serif", fontWeight:"bold"}}>Frequently Asked Questions</h1>
    <div className="container" style={{marginTop:"100px", marginBottom:"100px"}}>
            <Accordion data={data}  />
   
    </div>
     <FooterContainer />
</>
  );
}

export default Development;
