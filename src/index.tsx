import React from "react";
import ReactDOM from "react-dom/client";
import { BrickLayout } from "react-brick-layout";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <BrickLayout
        animateOnResize={true}
        breakPoint={{
          350: 1,
          450: 2,
          645: 3,
          900: 4,
          1200: 5,
        }}
      >
        <div className="card card-1">1</div>
        <div className="card card-2">2</div>
        <div className="card card-3">3</div>
        <div className="card card-4">4</div>
        <div className="card card-5">5</div>
        <div className="card card-6">6</div>
        <div className="card card-7">7</div>
        <div className="card card-8">8</div>
        <div className="card card-1">9</div>
        <div className="card card-2">10</div>
        <div className="card card-1">11</div>
        <div className="card card-2">12</div>
        <div className="card card-3">13</div>
        <div className="card card-4">14</div>
        <div className="card card-5">15</div>
        <div className="card card-6">16</div>
        <div className="card card-7">17</div>
        <div className="card card-8">18</div>
        <div className="card card-1">19</div>
        <div className="card card-2">20</div>
      </BrickLayout>
    </div>
  </React.StrictMode>
);
