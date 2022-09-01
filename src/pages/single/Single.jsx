import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className="single">
    <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              edit
            </div>
            <h1 className="title">
              Information
            </h1>
            <div className="item">
              <img
                className="itemImg"
                src="https://mir-s3-cdn-cf.behance.net/user/115/768684285594439.6194eba1d8d0b.jpg"
                alt="avatar"
              />
              <div className="details">
                <h1 className="itemTitle">
                  Tutku Tyln
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">tutku@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1234123123</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress: </span>
                  <span className="itemValue">Pyrmont, Nsw 2009</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Kayseri, Pastirma Koyu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Last 6 months revenue"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">
              Last transections
            </h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single
