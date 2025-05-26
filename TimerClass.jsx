import React from 'react'; // Import React để dùng class component và JSX

class TimerClass extends React.Component { // Tạo class component kế thừa React.Component
  constructor(props) {
    super(props); // Gọi constructor của lớp cha để khởi tạo props
    this.state = { seconds: 0 }; // Khởi tạo state để lưu số giây đã đếm
  }

  componentDidMount() {
    // Hàm này chạy sau khi component được render xong lần đầu
    this.interval = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds + 1 })); // Cập nhật state mỗi giây
    }, 1000); // Thiết lập bộ đếm tăng mỗi 1000ms (1 giây)
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Xóa interval khi component bị unmount để tránh rò rỉ bộ nhớ
  }

  render() {
    return <p>Đã đếm: {this.state.seconds} giây</p>; // Hiển thị số giây đã đếm ra giao diện
  }
}

export default TimerClass; // Xuất component để dùng ở nơi khác (ví dụ App.jsx)
