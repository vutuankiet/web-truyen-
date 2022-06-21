import {Link,Outlet} from "react-router-dom";

export const Detail = (props) => {
    return (
        <>
            <div className={"body"}>
                <div className="header">
                    <h2>Scroll Down</h2>
                    <p>Scroll down to see the sticky effect.</p>
                </div>

                <div id="navbar">
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/detail"}>Detail</Link>
                    <a href="javascript:void(0)">Contact</a>
                </div>

                <div className="content">
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                    <h3>Sticky Navigation Example</h3>
                    <p>The navbar will stick to the top when you reach its scroll position.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur
                        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                        voluptatibus.</p>
                </div>
            </div>
        </>
    )
}

