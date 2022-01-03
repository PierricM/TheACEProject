import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background-image: url("https://i.pinimg.com/originals/7e/e1/97/7ee1976ee9afb85c9d8db56e96295397.png");
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 45px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #6c1a00;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5b5f67;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #2abdd2;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #000000;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #2abdd2; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #F4511E;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #F4511E;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #434a59 !important;
}
.ant-layout {
  background-image: url("https://i.pinimg.com/originals/7e/e1/97/7ee1976ee9afb85c9d8db56e96295397.png");
  }
  .ant-table {
    background: #AF2A00;
  }
  .ant-table-thead > tr > th {
    background: #F4511E;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #AF2A00;
}

@-webkit-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
@-moz-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
@-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #1A2029;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}`;
