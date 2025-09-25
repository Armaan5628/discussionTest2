package com.myapp.discussionboard.repository;

import com.myapp.discussionboard.model.Discussion;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class DiscussionRepository {
    private static List<Discussion> discussions = new ArrayList<>();

    public List<Discussion> findAll() {
        return discussions;
    }

    public Optional<Discussion> findById(String id) {
        return discussions.stream().filter(d -> d.get_id().equals(id)).findFirst();
    }

    public Discussion save(Discussion discussion) {
        discussions.add(discussion);
        return discussion;
    }

    public void delete(String id) {
        discussions.removeIf(d -> d.get_id().equals(id));
    }
}
