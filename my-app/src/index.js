import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card'
import Collapse from './components/Collapse';
//JSX


const App = () => {
  return (
    <div className='container w-50'>
      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="collapseExample1">
              <Card 
                cardText="Lorem Ipsum Text 1"
                updatedTime="Last Updated 1 min ago"
                image="https://picsum.photos/id/1/200/300" />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="collapseExample2">
              <Card cardTitle="Card Title 2"
                cardText="Lorem Ipsum Text 2"
                updatedTime="Last Updated 2 min ago"
                image="https://picsum.photos/id/10/200/300" />
            </Collapse>
          </div>

          <div className='col'>
            <Collapse href="collapseExample3">
              <Card cardTitle="Card Title 3"
                cardText="Lorem Ipsum Text 3"
                updatedTime="Last Updated 3 min ago"
                image="https://picsum.photos/id/13/200/300" />
            </Collapse>
          </div>


        </div>
      </div>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);