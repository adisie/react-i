
// sub-pages
import LoginSignup from "../user/LoginSignup"

const Home = () => {
    return ( 
        <div className="home-container">
            <div className="sub-container home-content">
               <div className="home-content-container">
                    <h3>Content</h3>
               </div>
               <div className="home-right-container">
                    <LoginSignup />
                    <div className="right-notification">
                        notification
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum obcaecati saepe perferendis qui nostrum magni, laudantium voluptatem odio nisi, alias exercitationem placeat, in esse recusandae temporibus unde error? Quaerat labore, deserunt, cum eum ut assumenda ea nulla eaque ipsa dolore id pariatur nobis exercitationem dolorum ullam odit nisi commodi laboriosam error cupiditate dolor aliquid sapiente beatae iure? Facilis minus animi et saepe enim quod voluptas nulla voluptatem. Commodi sequi qui provident totam ad unde numquam quos hic saepe, maiores dignissimos, porro, sint obcaecati? Fuga, alias praesentium asperiores tempore minima officiis ipsa cumque maxime harum quo sed vel ea autem deserunt?
                        </p>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default Home;