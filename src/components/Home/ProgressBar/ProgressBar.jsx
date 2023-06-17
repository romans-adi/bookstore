import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.scss';

const CircularProgressBar = ({ progress }) => (
  <div className="progress">
    <CircularProgressbar value={progress} text={`${progress}%`} />
  </div>
);

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default CircularProgressBar;
