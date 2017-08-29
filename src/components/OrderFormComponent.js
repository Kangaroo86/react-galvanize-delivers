import React from 'react';

export default function OrderFormComponent({ input }) {
  let fillOut = input && input.map(element => element);
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field">
            <i className="small material-icons prefix">account_circle</i>
            <input
              type="text"
              tabindex="1"
              id="name"
              name="name"
              className="validate"
            />
            <label for="name">
              {fillOut && fillOut.name}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <i className="small material-icons prefix">phone</i>
            <input
              type="tel"
              tabindex="2"
              id="phone"
              name="phone"
              className="validate"
            />
            <label for="phone">
              {fillOut && fillOut.phone}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <i className="small material-icons prefix">domain</i>
            <input
              type="text"
              tabindex="3"
              id="address"
              name="address"
              className="validate"
            />
            <label for="address">
              {fillOut && fillOut.address}
            </label>
          </div>
        </div>
        <div className="center-align">
          <a id="executeOrder" className="waves-effect waves-light btn-large">
            <i className="material-icons right">cloud</i>SUBMIT
          </a>
        </div>
      </form>
    </div>
  );
}
