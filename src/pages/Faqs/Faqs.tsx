import { WhiteWrapper } from "../../component/layout/LayoutComponents";
import Header from "../../component/layout/header";
import { Content, Title, Container, Section, SubTag, Ul } from "./style";

const textList = [
  {
    title: "1. What is the purpose of this website?",
    content:
      "This website is a platform for recommending stores. Users can browse, discover, and review stores across various categories, but we don’t sell any products directly.",
  },
  {
    title: "2. How do I search for a specific store?",
    content:
      "You can use the search bar at the top of the page to enter a store name or category to find stores that interest you..",
  },
  {
    title: "3. How can I write a review for a store?",
    content:
      "If you’re a registered member, go to the store’s page and click the “Write a Review” button. You can then complete and submit your review.",
  },
  {
    title: "4. How do I register an account?",
    content:
      "Click the “Register” button at the top right of the homepage. After filling out the required information, your registration will be complete. Once registered, you can start writing reviews and saving favorites.",
  },
  {
    title: "5. Will my submitted review be displayed immediately?",
    content:
      "All reviews are reviewed before being displayed to ensure they meet our community guidelines and content standards. This process may take some time, so please be patient.",
  },
  {
    title: "6. Can I edit or delete my own reviews?",
    content:
      "Yes, after logging in, you can go to your profile page, find your published reviews under “My Reviews,” and choose to edit or delete them.",
  },
  {
    title: "7. How do I report inappropriate reviews?",
    content:
      "If you find content that does not adhere to our community guidelines or is inappropriate, you can click the “Report” button next to the review, and we will investigate further.",
  },
  {
    title: "8. How are store recommendations selected on the website?",
    content:
      "Store recommendations are based on user ratings, the number of reviews, and review content. This feature aims to help users find highly rated stores.",
  },
  {
    title: "9. Is there a fee to use this website?",
    content:
      "No, using this website is entirely free. Registering as a member, writing reviews, and browsing recommendations are all provided at no cost.",
  },
  {
    title: "10. How do I contact customer support?",
    content:
      "If you have any questions or need assistance, you can reach our support team by using the “Contact Us” form at the bottom of the website.",
  },
];
const AddEditList = [
  {
    title: "1. How to Add a New Store",
    li: [
      "Click the 'Add/Edit Store Information' button to access the store management page.",
      "Fill in details such as the store name, address, contact information, and operating hours.",
      "If available, upload appropriate store images to enhance the content's completeness and appeal",
    ],
  },
  {
    title: "2. How to Edit Store Information",
    li: [
      "Locate the store you want to edit and click the 'Edit' button",
      "Update the relevant details and ensure you click 'Save' to apply changes.",
    ],
  },
  {
    title: "3.Important Notes",
    li: [
      "Ensure all submitted information is accurate and truthful.",
      "Do not upload inappropriate or unrelated content, such as advertisements or misleading information.",
      "If you have any questions, please contact customer support or refer to the website's usage guidelines.",
    ],
  },
];

function Faqs() {
  return (
    <WhiteWrapper>
      <Header title="FAQs" />
      <Container>
        <div>
          <Title>Frequently Asked Questions (FAQ)</Title>
          <Content>
            {textList.map((item) => {
              return (
                <Section>
                  <SubTag>{item.title}</SubTag>
                  <p>{item.content}</p>
                </Section>
              );
            })}
          </Content>
        </div>
        <div>
          <Title>Add&Edit Store Information</Title>
          <Content>
            {AddEditList.map((item) => {
              return (
                <Section>
                  <SubTag>{item.title}</SubTag>
                  <Ul>
                    {item.li.map((text) => {
                      return <li>{text}</li>;
                    })}
                  </Ul>
                </Section>
              );
            })}
          </Content>
        </div>
      </Container>
    </WhiteWrapper>
  );
}

export default Faqs;
