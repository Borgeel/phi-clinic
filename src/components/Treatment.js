import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Treatment({treatments}) {

console.log('treatment, treatments su: ', treatments);

let categories = [];

treatments.forEach(treatment => {
  if(!categories.includes(treatment.category)){
    categories.push(treatment.category);
  }
});

console.log('kategorije su: ', categories);

  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {categories.map(function(category, i){
          return <Tab eventKey={category} title={category} key={i}>
            {treatments.map(function(treatment, i){
              if(treatment.category == category)
                return <p>{treatment.title}</p>
            })}
          </Tab>;
        })}
      </Tabs>
    </div>
  );
}



export default Treatment;
