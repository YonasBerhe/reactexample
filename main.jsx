// This is inside main.jsx
MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          {this.props.content}
        </div>
        <Footer />
      </div>
    )
  }
});
