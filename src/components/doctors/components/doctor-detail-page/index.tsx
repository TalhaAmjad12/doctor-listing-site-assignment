import Image from "next/image";

export default function DoctorsDetail() {
  return (
    // <div className="card h-[85vh]">
    // <figure className="mt-4 ">
    //   <Image
    //     src="https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain"
    //     alt="Movie"
    //     className="rounded-full"
    //     height={340}
    //     width={185}
    //   />
    // </figure>

    //   <div className="text-center">
    //     <p>Name</p>
    //     <p>Address</p>
    //     <p>specialty</p>
    //     <p>availibility</p>
    //     <p>contact info</p>
    //     <p>satisfied patients</p>
    //   </div>
    // </div>
    <div className="card">
      <div className="card-body">
        <div className="flex gap-10">
          <figure className="mt-4 ">
            <Image
              src="https://th.bing.com/th/id/OIP.qlmht6Rfwl-jbsK1f1T8AgHaHa?rs=1&pid=ImgDetMain"
              alt="Movie"
              className="rounded-full"
              height={340}
              width={185}
            />
          </figure>
          <div className="mt-16">
            <h2 className="card-title">Jamie Regel</h2>
            <div className="flex items-center space-x-2">
              <span>📌📌📌📌</span>
              <span>214 rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>85% trust</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <h3 className="text-lg font-semibold">User profile</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Gender:</strong> Female
            </p>
            <p>
              <strong>Date of birth:</strong> 23/02/1987
            </p>
            <p>
              <strong>Phone number:</strong> 263 281 480
            </p>
          </div>
          <div>
            <p>
              <strong>Blood type:</strong> AB
            </p>
            <p>Diéo/ Khiént thinh</p>
            <p>Silent</p>
            <p>Blind</p>
          </div>
        </div>
        <div className="divider"></div>
        <h3 className="text-lg font-semibold">Notifications type</h3>
        <p>Emergency: 8/11</p>
        <p>Helps: 4/5</p>
        <p>Number report: 5/9</p>
        <div className="divider"></div>
        <h3 className="text-lg font-semibold">Setting</h3>
        <p>
          <strong>Language:</strong> Tiếng Việt
        </p>
        <p>Get notifications</p>
        <p>Send to family</p>
        <p>
          <strong>Range get notifications:</strong> 5 km
        </p>
      </div>
    </div>
  );
}
