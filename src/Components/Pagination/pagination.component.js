import React, {Component} from 'react';

export default class Pagination extends Component {
    render() {
        return (
        //     <nav aria-label="Page navigation example">
        //     <ul class="pagination justify-content-center footer" style={{marginLeft: "15px"}}>
        //       <li class="page-item">
        //         <a class="page-link" href="#" aria-label="Previous">
        //           <span aria-hidden="true">&laquo;</span>
        //           <span class="sr-only">Previous</span>
        //         </a>
        //       </li>
        //       <li class="page-item"><a class="page-link" href="#">1</a></li>
        //       <li class="page-item"><a class="page-link" href="#">2</a></li>
        //       <li class="page-item"><a class="page-link" href="#">3</a></li>
        //       <li class="page-item">
        //         <a class="page-link" href="#" aria-label="Next">
        //           <span aria-hidden="true">&raquo;</span>
        //           <span class="sr-only">Next</span>
        //         </a>
        //       </li>
        //     </ul>
        //   </nav>

<nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
  <li class="page-item disabled">
    <a class="page-link" href="#" tabindex="-1">Previous</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
</nav>
        )
    }
}