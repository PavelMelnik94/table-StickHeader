import TableList from "./components/Table/TableList";

// interface IAppProps {
//   dataUrl: string;
// }

function App({ dataUrl }) {
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh
          mauris cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
          mattis nunc sed blandit libero volutpat. Nibh ipsum consequat nisl vel
          pretium lectus quam id. Consectetur adipiscing elit ut aliquam. Quis
          eleifend quam adipiscing vitae proin sagittis. Nulla pellentesque
          dignissim enim sit amet venenatis urna cursus. Aliquet sagittis id
          consectetur purus ut. Cum sociis natoque penatibus et. Tincidunt vitae
          semper quis lectus nulla at volutpat diam. Sit amet nisl suscipit
          adipiscing bibendum est. Nulla aliquet enim tortor at auctor urna
          nunc. Aenean euismod elementum nisi quis eleifend. Vitae et leo duis
          ut diam quam. Tellus in hac habitasse platea dictumst vestibulum
          rhoncus. Lorem donec massa sapien faucibus et molestie ac.
          Pellentesque diam volutpat commodo sed egestas egestas fringilla
          phasellus. Quam vulputate dignissim suspendisse in est ante in nibh.
          Interdum consectetur libero id faucibus nisl. Tempor orci eu lobortis
          elementum nibh tellus molestie. Tempor id eu nisl nunc mi ipsum. Sit
          amet consectetur adipiscing elit ut aliquam purus. Integer vitae justo
          eget magna fermentum iaculis eu non diam. Mi ipsum faucibus vitae
          aliquet. Turpis egestas pretium aenean pharetra magna ac placerat
          vestibulum.
        </p>
      </div>

      <div className="main">
        <TableList dataUrl={dataUrl} />

        <div style={{ marginTop: "50px" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh
            mauris cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
            mattis nunc sed blandit libero volutpat. Nibh ipsum consequat nisl
            vel pretium lectus quam id. Consectetur adipiscing elit ut aliquam.
            Quis eleifend quam adipiscing vitae proin sagittis. Nulla
            pellentesque dignissim enim sit amet venenatis urna cursus. Aliquet
            sagittis id consectetur purus ut. Cum sociis natoque penatibus et.
            Tincidunt vitae semper quis lectus nulla at volutpat diam. Sit amet
            nisl suscipit adipiscing bibendum est. Nulla aliquet enim tortor at
            auctor urna nunc. Aenean euismod elementum nisi quis eleifend. Vitae
            et leo duis ut diam quam. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Lorem donec massa sapien faucibus et molestie
            ac. Pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Quam vulputate dignissim suspendisse in est ante in nibh.
            Interdum consectetur libero id faucibus nisl. Tempor orci eu
            lobortis elementum nibh tellus molestie. Tempor id eu nisl nunc mi
            ipsum. Sit amet consectetur adipiscing elit ut aliquam purus.
            Integer vitae justo eget magna fermentum iaculis eu non diam. Mi
            ipsum faucibus vitae aliquet. Turpis egestas pretium aenean pharetra
            magna ac placerat vestibulum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh
            mauris cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
            mattis nunc sed blandit libero volutpat. Nibh ipsum consequat nisl
            vel pretium lectus quam id. Consectetur adipiscing elit ut aliquam.
            Quis eleifend quam adipiscing vitae proin sagittis. Nulla
            pellentesque dignissim enim sit amet venenatis urna cursus. Aliquet
            sagittis id consectetur purus ut. Cum sociis natoque penatibus et.
            Tincidunt vitae semper quis lectus nulla at volutpat diam. Sit amet
            nisl suscipit adipiscing bibendum est. Nulla aliquet enim tortor at
            auctor urna nunc. Aenean euismod elementum nisi quis eleifend. Vitae
            et leo duis ut diam quam. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Lorem donec massa sapien faucibus et molestie
            ac. Pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Quam vulputate dignissim suspendisse in est ante in nibh.
            Interdum consectetur libero id faucibus nisl. Tempor orci eu
            lobortis elementum nibh tellus molestie. Tempor id eu nisl nunc mi
            ipsum. Sit amet consectetur adipiscing elit ut aliquam purus.
            Integer vitae justo eget magna fermentum iaculis eu non diam. Mi
            ipsum faucibus vitae aliquet. Turpis egestas pretium aenean pharetra
            magna ac placerat vestibulum.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
