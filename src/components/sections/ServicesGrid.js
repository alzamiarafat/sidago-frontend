import { services } from "@/src/data/services";
import IconBox from "../ui/IconBox";

export default function ServicesGrid() {
  return (
    <div className="section no-padding" style={{ backgroundColor: "#e5e5e5" }}>
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <IconBox
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                animation={service.animation}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
