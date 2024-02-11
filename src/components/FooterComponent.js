function FooterComponent() {
   const date = new Date();

   return <div className="footer">{date.toString()}</div>;
}

export default FooterComponent;
