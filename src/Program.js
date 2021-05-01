function Program() {
    return (
        <div className='section section-program' id='program'>
            <div className='title title-program'>PROGRAM</div>
            {/* time */}
            <div className='section-time'>
                <div className='headline headline-time' >7:30 PM – 8:00 PM</div>
                <div className='bodytext bodytext-program'>INTRODUCTION WITH LIPP TV HOST PROFESSOR LIPP
                <br></br>+ ADVERTISMENT BATCH #1</div>
            </div>
            {/* accordion menus */}
            <div className='section-performers'>
                <div className='acccordion-block'>
                    <input type='checkbox' className='accordion-checkbox' id='check-1'></input>
                    <label for="check-1" className='headline program-performers program-red'>▷ MONDOFACTS HOSTED BY SYLVAN ZHENG</label>
                    <div className='accordion-content'>
                        <p>description</p>
                    </div>
                </div>

                <div className='acccordion-block'>
                    <input type='checkbox' className='accordion-checkbox' id='check-2'></input>
                    <label for="check-2" className='headline program-performers program-magenta'>▷ MTV JAMS HOSTED BY NIKHIL KUMAR</label>
                    <div className='accordion-content'>
                        <p>description</p>
                    </div>
                </div>

                <div className='acccordion-block'>
                <input type='checkbox' className='accordion-checkbox' id='check-3'></input>
                <label label for="check-3" className='headline program-performers program-blue'>▷ NO RESEARCH NATURE HOSTED BY BEN MOLL</label>
                <div className='accordion-content'>
                    <p>description</p>
                </div>
                </div>
            </div>

            {/* time */}
            <div className='section-time'>
                <div className='headline headline-time'>I8:00 PM – 8:30 PM</div>
                <div className='bodytext bodytext-program'>INTRODUCTION WITH LIPP TV HOST PROFESSOR LIPP
                <br></br>+ ADVERTISMENT BATCH #2</div>
            </div>
            {/* accordion menus */}
            <div className='section-performers'>

            <div className='acccordion-block'>
                    <input type='checkbox' className='accordion-checkbox' id='check-4'></input>
                    <label for="check-4" className='headline program-performers program-yellow'>▷ STREAM FIGHTER HOSTED BY CHRISTINA DACANAY AND CY KIM</label>
                    <div className='accordion-content'>
                        <p>description</p>
                    </div>
                </div>

                <div className='acccordion-block'>
                    <input type='checkbox' className='accordion-checkbox' id='check-5'></input>
                    <label for="check-5" className='headline program-performers program-magenta'>▷ OFFICE OLYMPICS HOSTED BY CEZAR MOCAN</label>
                    <div className='accordion-content'>
                        <p>description</p>
                    </div>
                </div>

                <div className='acccordion-block'>
                <input type='checkbox' className='accordion-checkbox' id='check-6'></input>
                <label label for="check-6" className='headline program-performers program-white'>▷ RANDOM ACCESS MEMORIES HOSTED BY SOHAILA MOSBEH AND YOUNG MIN CHOI</label>
                <div className='accordion-content'>
                    <p>description</p>
                </div>
                </div>
            </div>


        </div>

    );
}

export default Program;
