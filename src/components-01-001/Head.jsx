export const Head = ({clas, id}) => {
    console.log(clas, id);
    return <p className={clas} id={id}>
        I am Head
    </p>
};