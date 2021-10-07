
import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import routes from "routes.js";


export function Admin(props) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  if (getCookie("id") === "") {
    return (
      <>
        <div className="wrapper">
          <Sidebar
            color={color}
            image={hasImage ? image : ""}
            routes={routes}
          />

          <div className="main-panel" ref={mainPanel}>
            <div className="content">
              <LoginForm />
            </div>
            <Footer />
          </div>
        </div>
        <FixedPlugin
          hasImage={hasImage}
          setHasImage={() => setHasImage(!hasImage)}
          color={color}
          setColor={(color) => setColor(color)}
          image={image}
          setImage={(image) => setImage(image)}
        />
      </>
    );
  }
  // }else{
  // return (
  //   <>
  //     <div className="wrapper">
  //       <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
  //       <div className="main-panel" ref={mainPanel}>
  //         <div className="content">
  //           <LoginForm />
  //         </div>
  //         <Footer />
  //       </div>
  //       <FixedPlugin
  //         hasImage={hasImage}
  //         setHasImage={() => setHasImage(!hasImage)}
  //         color={color}
  //         setColor={(color) => setColor(color)}
  //         image={image}
  //         setImage={(image) => setImage(image)}
  //       />
  //   </>
  //   );
  // }
  else {
    return (
      <>
        <div className="wrapper">
          <Sidebar
            color={color}
            image={hasImage ? image : ""}
            routes={routes}
          />
          <div className="main-panel" ref={mainPanel}>
            <AdminNavbar />
            <div className="content">
              <Switch>
                <Route
                  exact
                  path={"/admin/rooms/:id"}
                  render={({ match }) => (
                    <RoomShowPage roomId={match.params.id} />
                  )}
                />
                
                <Route
                  exact
                  path={"/admin/customer-managements/:id"}
                  render={({ match }) => (
                    <CustomerShowPage customerId={match.params.id} />
                  )}
                />

                <Route
                  exact
                  path={"/admin/addresses/:id"}
                  render={({ match }) => (
                    <AddressShowPage addressId={match.params.id} />
                  )}
                />

                <Route
                  exact
                  path={"/admin/customer-managements/:id/line-linker"}
                  render={({ match }) => (
                    <LineLinkerPage customerId={match.params.id} />
                  )}
                />

                <Route
                  exact
                  path={"/admin/lineconfig/:lineConfigId/account-linker"}
                  render={({ match }) => (
                    <LineConfigLinkerPage
                      lineConfigId={match.params.lineConfigId}
                    />
                  )}
                />
                <Route
                  exact
                  path={"/admin/products/:id"}
                  render={({ match }) => (
                    <ProductShowPage productId={match.params.id} />
                  )}
                />

                <Route
                  exact
                  path={"/admin/bills/:id"}
                  render={({ match }) => (
                    <BillShowPage billId={match.params.id} />
                  )}
                />

                {getRoutes(routes)}
              </Switch>
            </div>
          </div>
        </div>
        <FixedPlugin
          hasImage={hasImage}
          setHasImage={() => setHasImage(!hasImage)}
          color={color}
          setColor={(color) => setColor(color)}
          image={image}
          setImage={(image) => setImage(image)}
        />
      </>
    );
  }
}

export default Admin;
