package com.onlinelibrary.spring_boot_library.service;

import com.onlinelibrary.spring_boot_library.entity.Review;
import com.onlinelibrary.spring_boot_library.repository.ReviewRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewServiceImplementation implements ReviewService{

    private final ReviewRepository reviewRepository;

    public ReviewServiceImplementation(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public Page<Review> getReviewsByBookId(Long bookId, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return reviewRepository.findByBookId(bookId, pageable);
    }
}
