import FilterList from './FilterList';
import ImageList from './ImageList';

function Home() {
    const cities = ['Kaunas', 'Vilnius', 'Prienai'];
    const experiences = ['kava', 'maistas', 'istorija', 'baugu'];
    const data = [
        { 
        title: "Tauro troba", 
        source: "https://static.wixstatic.com/media/cf462c_7895db50243b493386c3f7274762aed9~mv2.jpg/v1/fill/w_600,h_584,al_c,q_80,usm_0.66_1.00_0.01/cf462c_7895db50243b493386c3f7274762aed9~mv2.webp"
        },
        { 
        title: "Tauro troba", 
        source: "https://static.wixstatic.com/media/cf462c_7895db50243b493386c3f7274762aed9~mv2.jpg/v1/fill/w_600,h_584,al_c,q_80,usm_0.66_1.00_0.01/cf462c_7895db50243b493386c3f7274762aed9~mv2.webp"
        },
        { 
        title: "Tauro troba", 
        source: "https://static.wixstatic.com/media/cf462c_7895db50243b493386c3f7274762aed9~mv2.jpg/v1/fill/w_600,h_584,al_c,q_80,usm_0.66_1.00_0.01/cf462c_7895db50243b493386c3f7274762aed9~mv2.webp"
        },
        { 
        title: "Tauro troba", 
        source: "https://static.wixstatic.com/media/cf462c_7895db50243b493386c3f7274762aed9~mv2.jpg/v1/fill/w_600,h_584,al_c,q_80,usm_0.66_1.00_0.01/cf462c_7895db50243b493386c3f7274762aed9~mv2.webp"
        }
    ];

    return (
        <div className="content">
            <FilterList title={`rinkis miestą:`} filters={cities}/>
            <ImageList data={data} />
            <FilterList title="rinkis patirtį:" filters={experiences}/>
        </div>
    )
}

export default Home;