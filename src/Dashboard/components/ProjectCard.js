import Toggle from './../components/ToggleButton';
import moment from 'moment';

const ProjectCard = ({ included, id, name, updated_at, description, projectLogo, toggleShow }) => {
  return (
    <div>
      <div className="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-pink-500 to-red-500   rounded-lg shadow-2xl hover:scale-105">
        <img className="h-56 rounded-t-lg  object-cover" alt="logo " src={projectLogo} />
        <div className="" onClick={toggleShow(!included, id)}>
          <Toggle checked={included} />
        </div>
        <div className="px-6 pt-8 mb-2 text-xl text-red-50 font-bold">
          <span>{name}</span>
        </div>
        <div className="px-6  mb-2 text-lg text-red-50 ">
          {/* <a target="_blank" rel="noopener noreferrer">
                            item.organization
                          </a> */}
        </div>
        <div className="px-6 pt-2 text-blue-50">
          <small>update on:- {moment(updated_at).format('DD-MM-YYYY')}</small>
          <div className="overflow-hidden h-40 ...">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
