class PostDetail extends Component{
    constructor(props){
        super(props);
        this.state = {list:[], titile:'', body: ''};
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data) => {
            this.setState({list: data})
        })
    }

    render(){
        return(
          <div>
              
          </div>  
        )
    }
}
export default PostDetail;