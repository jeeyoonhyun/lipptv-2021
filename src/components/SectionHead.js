function SectionHead(props) {
    return (
      <div className={`section-head ${props.name}`}>{props.text}</div>
    );
}

export default SectionHead;
  