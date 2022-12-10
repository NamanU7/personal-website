import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-7xl mb-4 md:mb-8 font-bold">Naman Uttamchandani</h1>
            <p className="text-base md:text-xl mb-5 font-medium dark:text-stone-100">Student</p>
            <p className="text-sm max-w-xl mb-4 font-bold dark:text-stone-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sagittis lacus, eu pharetra erat porttitor ut.
                Donec rutrum sollicitudin accumsan. Sed ut urna vel magna egestas dictum. Aenean urna nisi, mollis quis neque eu, vulputate vehicula tortor.
                Fusce eu leo in nulla posuere vehicula. Morbi suscipit eros at est vestibulum, a ullamcorper lectus mattis.
                Maecenas pharetra suscipit urna, ac congue odio dictum commodo. Fusce elementum consequat leo a finibus. In ultrices vel dolor eu ultricies. (TBA)
            </p>
        </div>
    );
}

export default Intro;
