import { ListModal } from "./styles";
import { useState } from "react";
import { Modal } from "antd";
import 'antd/dist/antd.css';
import 'styles/styles.css';

const MyModal = () => {
   const [visible, setVisible] = useState(false);
   return (
      <ListModal>
         <img src="images/icon1.png" alt="" onClick={() => setVisible(true)} />
         <Modal
            visible={visible}
            onCancel={() => setVisible(false)}
         >
            <div className="content-modal">
               <div className="header-modal">
                  <img src="images/image-modul.png" alt="" className="header-img-modal" data-aos="zoom-in" />
               </div>
               <div className="body-modal">
                  <div className="modal-menu-con">
                     <div className="modal-about">
                        <div className="modal-about-con">
                           <h3 className="title-modal">DỰ ÁN N048 - NGOẠI GIAO ĐOÀN</h3>
                           <div className="modal-item">
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Tên dự án</p>
                                 <p className="text1-modal">: Tổ hợp chung cư cao tầng N04B - Khu đoàn Ngoại giao tại Hà Nội</p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Chủ đầu tư</p>
                                 <p className="text1-modal">: Công ty Cổ phần Đầu tư Xây dựng Bất động sản Lanmak
                                 </p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Hạng mục</p>
                                 <p className="text1-modal">: Phần kết cấu thân nhà / Phần hoàn thiện kiến trúc
                                 </p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Địa điểm</p>
                                 <p className="text1-modal">: Khu đoàn Ngoại giao, Xuân Tảo, Bắc Từ Liêm, Hà Nội
                                 </p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Loại công trình</p>
                                 <p className="text1-modal">: Dân dụng, căn hộ chung cư </p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Cấp công trình</p>
                                 <p className="text1-modal">: Cấp 1</p>
                              </div>
                              <div className="modal-icon">
                                 <p className="text-modal clearfix">Thời gian thực hiện</p>
                                 <p className="text1-modal">: 2013-2015</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </ListModal>
   )
};

export default MyModal;
