import React from 'react'
import Reason from './Reason'
import SanPhamNoiBat from './SanPhamNoiBat'

const IntroduceCompany = () => {
    return (
        <div>
            <p className='mt-3 fs-3'>Biti's (Công ty Sản xuất Hàng tiêu dùng Bình Tiên) không chỉ là một thương hiệu giày dép, mà còn được coi là một "huyền thoại" sống đối với nhiều thế hệ người Việt. Từ một xưởng sản xuất nhỏ tại Quận 6, TP.HCM từ năm 1982, Biti's đã vươn mình thành biểu tượng của sự bền bỉ và được công nhận là THƯƠNG HIỆU DẪN ĐẦU THỊ TRƯỜNG GIÀY DÉP VIỆT NAM về doanh thu năm 2018 (dựa theo báo cáo thực hiện bởi tập đoàn nghiên cứu thị trường hàng đầu thế giới Euromonitor International, công bố tháng 03 năm 2019).</p>
            <div className="d-flex justify-content-center mt-2">
                <img src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/64235570_2392899184065265_5977725209011027968_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEsc6WjckfcL1-a299YU1-P_dzXvu8M4JL93Ne-7wzgkuF2KduCW4cfROxqSSqhRdNnoEep57P2UwfG8nuiEBkd&_nc_ohc=uwNxMURsfnAQ7kNvwEQVeS8&_nc_oc=AdlpJq8N9o8XzHSoch5eAMQXl1XSspCDEIlS9SLFs5YM1KoSgfrPO8eYawhQtVhGGz4&_nc_zt=23&_nc_ht=scontent.fsgn5-2.fna&_nc_gid=ZPIS8MlrCPnfsf2BjTkrkw&_nc_ss=8&oh=00_AfwLaN4YlThSY9pxsGydYdPXdBmA9arwikuuMD3zlBhmjQ&oe=69DF13CA" className='w-75' alt="..." />
            </div>
            <div className='mt-4' >
                <h1 className='text-light text-center' style={{ background: 'rgb(29,69,141)', padding:'50px'}}>Tại sao Biti's vẫn giữ được sức hút?</h1>
                <Reason/>
            </div>
            <SanPhamNoiBat/>
            

        </div>
    )
}

export default IntroduceCompany