import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return false;
        }
        dispatch(addTodo(input.value));
        input.value = '';
        return false;
      }}>
        <input ref={(node) => { input = node; }} />

        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

const connectAddTodo = connect()(AddTodo);

export default connectAddTodo;
