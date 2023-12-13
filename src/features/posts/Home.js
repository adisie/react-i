
const Home = () => {
    return ( 
        <div>
            <h3>Home</h3>
            {
                true 
                ?
                <button>Add New</button>
                :
                <></>
            }
        </div>
     );
}
 
export default Home;