import styled from "styled-components";

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZW1wbG95ZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  background-position: center;
`;

export default PageWrapper;
