import React, {createRef} from 'react'

import './Navbar.css'

class Navbar extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      collapsed: window.innerWidth < this.props.collapse_size,
      toggled: false,
      prevScrollPos: window.pageYOffset
    }
    this.navbar = createRef()
    this.menuBtn = createRef()

    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleCollapse)
    window.addEventListener('scroll', this.handleScroll)
  }

  handleCollapse(event){
    const {collapse_size} = this.props

    this.setState({ toggled: false })
    document.body.style.overflow = 'auto'

    if(window.innerWidth < collapse_size)
    {
      this.setState({
        collapsed: true,
        toggled: false
      })
    }
    else{
      this.setState({
        collapsed: false,
        toggled: false
      })
    }
    
  }

  handleScroll(event){
    const {prevScrollPos, collapsed} = this.state
    var currentScrollPos = window.pageYOffset

    if(collapsed){
      if (prevScrollPos > currentScrollPos) {
        this.navbar.current.style.top = "0";
      }
      else {
        this.navbar.current.style.top = "-80px";
      }
      this.setState({ prevScrollPos: currentScrollPos })
    }
    else{
      this.navbar.current.style.top = "0";
    }
  }

  handleMenuClick(event){
    const {toggled} = this.state

    if(toggled){
      this.setState({ toggled: false })
      document.body.style.overflow = 'auto'
    }
    else{
      this.setState({ toggled: true })
      document.body.style.overflow = 'hidden'
    }
  }

  render(){
    const {collapsed, toggled} = this.state

    return(
      <div class={`navbar ${toggled ? 'toggled' : ''}`} ref={this.navbar}>
        <div class='navbar-container'>
          <div class='navbar-brand'>
            <svg width="130" height="43" viewBox="0 0 130 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.1917 30.5693C57.0071 30.5693 56.8561 30.5081 56.7387 30.3858C56.6212 30.246 56.5625 30.0799 56.5625 29.8877V27.3446C56.5625 26.9775 56.6883 26.6629 56.94 26.4008L65.0439 16.1236H57.4182C57.2504 16.1236 57.0994 16.0624 56.9652 15.9401C56.8477 15.8003 56.789 15.643 56.789 15.4682V12.8727C56.789 12.6804 56.8477 12.5231 56.9652 12.4008C57.0994 12.2784 57.2504 12.2173 57.4182 12.2173H70.1278C70.3123 12.2173 70.4633 12.2784 70.5808 12.4008C70.6982 12.5231 70.7569 12.6804 70.7569 12.8727V15.4158C70.7569 15.7129 70.6479 16.01 70.4298 16.3071L62.5524 26.6105H70.4046C70.5892 26.6105 70.7402 26.6804 70.8576 26.8202C70.9918 26.9426 71.059 27.0999 71.059 27.2922V29.9139C71.059 30.1061 70.9918 30.2634 70.8576 30.3858C70.7402 30.5081 70.5892 30.5693 70.4046 30.5693H57.1917Z" fill="#FDFBF8"></path>
              <path d="M76.8825 30.5693C76.7147 30.5693 76.5637 30.5081 76.4294 30.3858C76.312 30.246 76.2533 30.0887 76.2533 29.9139V12.8727C76.2533 12.6804 76.312 12.5231 76.4294 12.4008C76.5637 12.2784 76.7147 12.2173 76.8825 12.2173H88.6357C88.8202 12.2173 88.9712 12.2784 89.0887 12.4008C89.2061 12.5231 89.2648 12.6804 89.2648 12.8727V15.3371C89.2648 15.5119 89.2061 15.6692 89.0887 15.809C88.9712 15.9314 88.8202 15.9925 88.6357 15.9925H80.6072V19.5319H88.082C88.2665 19.5319 88.4175 19.6018 88.535 19.7416C88.6524 19.8639 88.7112 20.0212 88.7112 20.2135V22.4944C88.7112 22.6692 88.6524 22.8265 88.535 22.9663C88.4175 23.0887 88.2665 23.1498 88.082 23.1498H80.6072V26.794H88.837C89.0216 26.794 89.1726 26.8552 89.29 26.9775C89.4075 27.0999 89.4662 27.2572 89.4662 27.4495V29.9139C89.4662 30.0887 89.4075 30.246 89.29 30.3858C89.1726 30.5081 89.0216 30.5693 88.837 30.5693H76.8825Z" fill="#FDFBF8"></path>
              <path d="M95.4729 30.5693C95.3052 30.5693 95.1542 30.5081 95.0199 30.3858C94.9025 30.246 94.8438 30.0887 94.8438 29.9139V12.8727C94.8438 12.6804 94.9025 12.5231 95.0199 12.4008C95.1542 12.2784 95.3052 12.2173 95.4729 12.2173H102.318C104.516 12.2173 106.228 12.7416 107.453 13.7903C108.694 14.8215 109.315 16.2897 109.315 18.1948C109.315 19.4182 109.038 20.4582 108.485 21.3146C107.931 22.1711 107.167 22.8265 106.194 23.2809L109.642 29.7304C109.693 29.8352 109.718 29.9314 109.718 30.0187C109.718 30.1586 109.659 30.2897 109.542 30.412C109.441 30.5169 109.323 30.5693 109.189 30.5693H105.842C105.355 30.5693 105.011 30.3334 104.81 29.8614L101.941 24.0937H99.3739V29.9139C99.3739 30.1061 99.3068 30.2634 99.1726 30.3858C99.0551 30.5081 98.9041 30.5693 98.7196 30.5693H95.4729ZM102.268 20.3708C103.04 20.3708 103.627 20.1785 104.03 19.794C104.433 19.392 104.634 18.8415 104.634 18.1423C104.634 17.4432 104.433 16.8927 104.03 16.4907C103.644 16.0712 103.057 15.8614 102.268 15.8614H99.3739V20.3708H102.268Z" fill="#FDFBF8"></path>
              <path d="M121.886 30.8315C119.52 30.8315 117.657 30.2285 116.298 29.0225C114.939 27.8165 114.218 26.0425 114.134 23.7004C114.117 23.1935 114.109 22.442 114.109 21.4457C114.109 20.432 114.117 19.6717 114.134 19.1648C114.218 16.8577 114.948 15.0837 116.324 13.8427C117.716 12.5843 119.57 11.9551 121.886 11.9551C124.201 11.9551 126.055 12.5843 127.448 13.8427C128.84 15.0837 129.57 16.8577 129.637 19.1648C129.671 20.1785 129.688 20.9388 129.688 21.4457C129.688 21.9351 129.671 22.6867 129.637 23.7004C129.553 26.0425 128.832 27.8165 127.473 29.0225C126.114 30.2285 124.251 30.8315 121.886 30.8315ZM121.886 27.0562C122.808 27.0562 123.538 26.7678 124.075 26.191C124.629 25.6143 124.922 24.7316 124.956 23.5431C124.99 22.5294 125.006 21.8128 125.006 21.3933C125.006 20.9388 124.99 20.2222 124.956 19.2435C124.922 18.055 124.629 17.1723 124.075 16.5955C123.521 16.0187 122.792 15.7304 121.886 15.7304C120.98 15.7304 120.25 16.0187 119.696 16.5955C119.159 17.1723 118.866 18.055 118.815 19.2435C118.798 19.7329 118.79 20.4495 118.79 21.3933C118.79 22.3196 118.798 23.0362 118.815 23.5431C118.866 24.7316 119.159 25.6143 119.696 26.191C120.233 26.7678 120.963 27.0562 121.886 27.0562Z" fill="#FDFBF8"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.8817 35.7037C32.1244 39.6791 26.8184 42.157 20.9375 42.157C9.54663 42.157 0.3125 32.8606 0.3125 21.393C0.3125 9.92529 9.54663 0.628906 20.9375 0.628906C32.3284 0.628906 41.5625 9.92529 41.5625 21.393C41.5625 21.6883 41.5564 21.9822 41.5442 22.2746C40.5016 21.7123 39.3069 21.393 38.0371 21.393C37.0823 21.393 36.1699 21.5735 35.3327 21.9022C33.8668 19.8789 31.4756 18.5615 28.7747 18.5615C25.1186 18.5615 22.0301 20.9754 21.0357 24.2866C20.7714 24.2457 20.5005 24.2244 20.2246 24.2244C17.3389 24.2244 14.9996 26.5485 14.9996 29.4154C14.9996 32.2823 17.3389 34.6064 20.2246 34.6064C21.6942 34.6064 23.0221 34.0037 23.9714 33.0335C25.3138 34.0219 26.9755 34.6064 28.7747 34.6064C30.1615 34.6064 31.4667 34.2591 32.6069 33.6472C33.4834 34.5976 34.6093 35.3173 35.8817 35.7037Z" fill="#FDFBF8"></path>
            </svg>
          </div>

          
            {
              collapsed ? 
              (
                <div div class='navbar-menu'>
                  <div class='navbar-button navbar-item'>Get Zero</div>
                  <div
                    class={`navbar-icon-menu navbar-item ${toggled ? 'close' : ''}`}
                    onClick={this.handleMenuClick}
                    ref={this.menuBtn}
                  >
                    <span class='hamburger-item hamburger-top'></span>
                    <span class='hamburger-item hamburger-middle'></span>
                    <span class='hamburger-item hamburger-bottom'></span>
                    
                  </div>
                </div>   
              )
              :
              (
                <div div class='navbar-menu'>
                  <div class='navbar-links'>
                    <div class='navbar-link navbar-item'>Zero Plus</div>
                    <div class='navbar-link navbar-item'>Why Fasting?</div>
                    <div class='navbar-link navbar-item'>Blog</div>
                    <div class='navbar-link navbar-item'>Shop</div>
                  </div>
                  <div class='navbar-button navbar-item'>Get Zero</div>
                </div>
              )
            }
            
        </div>
        {
          (collapsed && toggled) && (
            <div class='navbar-links navbar-links-collapsed'>
              <div class='navbar-link navbar-item'>Zero Plus</div>
              <div class='navbar-link navbar-item'>Why Fasting?</div>
              <div class='navbar-link navbar-item'>Blog</div>
              <div class='navbar-link navbar-item'>Shop</div>
            </div>
          )
        }
      </div>
    )
  }

}

export default Navbar;