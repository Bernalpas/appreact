
import { Component } from 'react';



export class Footer extends Component{

    render(){
        return(

            <footer class="container py-5">
                <div class="row">
                    <div class="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24">
                            <title>Product</title>
                            <circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                        </svg>
                        <small class="d-block mb-3 text-muted">&copy; 2021</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li><a className="link-secondary" href="https://capacitarte.org">Cool stuff</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Random feature</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Team feature</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Stuff for developers</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Another one</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Last time</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a className="link-secondary" href="https://capacitarte.org">Resource name</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Resource</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Another resource</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a className="link-secondary" href="https://capacitarte.org">Business</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Education</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Government</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Gaming</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><a className="link-secondary" href="https://capacitarte.org">Team</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Locations</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Privacy</a></li>
                            <li><a className="link-secondary" href="https://capacitarte.org">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}


