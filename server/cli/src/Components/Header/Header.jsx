import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  RiHeartLine,
  RiMenLine,
  RiMenuLine,
  RiShoppingBag2Line,
  RiShoppingBagLine,
} from "@remixicon/react";
import UserIcon from "../../assets/user-icon.png";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
import { cartActions } from "../../Redux/slices/cartSlice";
const Header = () => {
  const totalQuantity = useSelector((s) => s.cart.totalQuantity);
  const {currentUser}=useAuth();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [dropdown,setDropdown]=useState(false);
  const signOut=()=>{
    auth.signOut().then(d=>{
      dispatch(cartActions.clearCart());
      toast.success("Logout Successfull");
      navigate('/login');
    })
  }
  const navLinks = [
    {
      path: "Home",
      link: "home",
    },
    {
      path: "Shop",
      link: "shop",
    },
    {
      path: "Cart",
      link: "cart",
    },
  ];
  return (
    <div className="header">
      <div className="flex hleft">
        <RiShoppingBagLine size={36} />
        <div>
          <div style={{ fontWeight: "bold" }}>Techmart</div>
          <p style={{ margin: 0, fontSize: "0.7em" }}>Since 1995</p>
        </div>
      </div>
      <nav>
        <ul>
          {navLinks.map((n, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={n.link}
                style={{ color: "black" }}
                className={(navClass) =>
                  navClass.isActive ? "nav__active" : ""
                }
              >
                {n.path}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex hleft">
        <span
          style={{ position: "relative", cursor: "pointer", paddingTop: "7px" }}
        >
          <RiHeartLine size={24} />
          <span className="badge">0</span>
        </span>
        <span
          style={{ position: "relative", cursor: "pointer", paddingTop: "7px" }}
        >
          <Link to="/cart">
            <RiShoppingBag2Line color="black" size={24} />
            <span className="badge">{totalQuantity}</span>
          </Link>
        </span>
        <div className="profile-container"         
        onMouseEnter={(e)=>setDropdown(true)}
          onMouseLeave={(e)=>setDropdown(false)}>
        <Link to="login" style={{pointerEvents:currentUser?'none':'auto'}}>
        <img
          src={currentUser?currentUser.photoURL:UserIcon}
          style={{ width: "30px" ,height:'30px', cursor: "pointer",borderRadius:'50%',objectFit:'cover',ObjectPosition:'center center' }}
          alt="test"
        />
        </Link>
        {dropdown && currentUser && (<div className="profile-dropdown">
          <button onClick={signOut}>Logout</button>
        </div>)}
        </div>
        <span className="nav__menu" style={{ paddingTop: "10px" }}>
          <RiMenuLine size={24} />
        </span>
      </div>
    </div>
  );
};

export default Header;
