import React, { useEffect, useState } from "react";

const hOCList = (WrappedComponent, entity) => {
    const EnhancedComp = () => {
        const [data, setData] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${entity}`).then(res => res.json()).then((result) => { setData(result) })
        }, [])
        return (
            <div style={{ backgroundColor: "#efefef" }}>
                <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                <WrappedComponent data={data} searchTerm={searchTerm} />
            </div>
        )
    }

    // class HOCList extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = { data: [], searchTerm: '' };
    //     }
    //     componentDidMount() {
    //         fetch(`https://jsonplaceholder.typicode.com/${entity}`).then(res => res.json()).then((result) => { this.setState({ data: result }) })
    //     }
    //     render() {
    //         console.log("dataa", this.state);
    //         return (
    //             <div style={{ backgroundColor: "#efefef" }}>
    //                 <input type="text" value={this.searchTerm} onChange={(e) => { this.setState({ searchTerm: e.target.value }) }} />
    //                 <WrappedComponent data={this.state.data} searchTerm={this.state.searchTerm} />
    //             </div>
    //         )
    //     }
    // }
    return EnhancedComp;
}
export default hOCList;