// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_14876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14877,table_section_wrapper_14877,opt_wrapper_14876,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14878,table_section_wrapper_14877,cell_wrapper_14878,opt_wrapper_14876,table_section_wrapper_14877,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14877]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14883 = cljs.core.seq.call(null,tbody);var chunk__14884 = null;var count__14885 = 0;var i__14886 = 0;while(true){
if((i__14886 < count__14885))
{var child = cljs.core._nth.call(null,chunk__14884,i__14886);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14887 = seq__14883;
var G__14888 = chunk__14884;
var G__14889 = count__14885;
var G__14890 = (i__14886 + 1);
seq__14883 = G__14887;
chunk__14884 = G__14888;
count__14885 = G__14889;
i__14886 = G__14890;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14883);if(temp__4092__auto__)
{var seq__14883__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14883__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14883__$1);{
var G__14891 = cljs.core.chunk_rest.call(null,seq__14883__$1);
var G__14892 = c__4148__auto__;
var G__14893 = cljs.core.count.call(null,c__4148__auto__);
var G__14894 = 0;
seq__14883 = G__14891;
chunk__14884 = G__14892;
count__14885 = G__14893;
i__14886 = G__14894;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14883__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14895 = cljs.core.next.call(null,seq__14883__$1);
var G__14896 = null;
var G__14897 = 0;
var G__14898 = 0;
seq__14883 = G__14895;
chunk__14884 = G__14896;
count__14885 = G__14897;
i__14886 = G__14898;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14900 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14900,0,null);var start_wrap = cljs.core.nth.call(null,vec__14900,1,null);var end_wrap = cljs.core.nth.call(null,vec__14900,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14901 = wrapper.lastChild;
var G__14902 = (level - 1);
wrapper = G__14901;
level = G__14902;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj14904 = {};return obj14904;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__14905){
var mesg = cljs.core.seq(arglist__14905);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__14906){
var mesg = cljs.core.seq(arglist__14906);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__14907){
var contents = cljs.core.seq(arglist__14907);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14908_SHARP_){return p1__14908_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14909_SHARP_,p2__14910_SHARP_){return goog.dom.insertChildAt(p1__14909_SHARP_,p2__14910_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14912_SHARP_,p2__14911_SHARP_){return goog.dom.insertSiblingBefore(p2__14911_SHARP_,p1__14912_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14914_SHARP_,p2__14913_SHARP_){return goog.dom.insertSiblingAfter(p2__14913_SHARP_,p1__14914_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14916_SHARP_,p2__14915_SHARP_){return goog.dom.replaceNode(p2__14915_SHARP_,p1__14916_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__14921_14925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14922_14926 = null;var count__14923_14927 = 0;var i__14924_14928 = 0;while(true){
if((i__14924_14928 < count__14923_14927))
{var n_14929 = cljs.core._nth.call(null,chunk__14922_14926,i__14924_14928);goog.style.setStyle(n_14929,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14930 = seq__14921_14925;
var G__14931 = chunk__14922_14926;
var G__14932 = count__14923_14927;
var G__14933 = (i__14924_14928 + 1);
seq__14921_14925 = G__14930;
chunk__14922_14926 = G__14931;
count__14923_14927 = G__14932;
i__14924_14928 = G__14933;
continue;
}
} else
{var temp__4092__auto___14934 = cljs.core.seq.call(null,seq__14921_14925);if(temp__4092__auto___14934)
{var seq__14921_14935__$1 = temp__4092__auto___14934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14921_14935__$1))
{var c__4148__auto___14936 = cljs.core.chunk_first.call(null,seq__14921_14935__$1);{
var G__14937 = cljs.core.chunk_rest.call(null,seq__14921_14935__$1);
var G__14938 = c__4148__auto___14936;
var G__14939 = cljs.core.count.call(null,c__4148__auto___14936);
var G__14940 = 0;
seq__14921_14925 = G__14937;
chunk__14922_14926 = G__14938;
count__14923_14927 = G__14939;
i__14924_14928 = G__14940;
continue;
}
} else
{var n_14941 = cljs.core.first.call(null,seq__14921_14935__$1);goog.style.setStyle(n_14941,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14942 = cljs.core.next.call(null,seq__14921_14935__$1);
var G__14943 = null;
var G__14944 = 0;
var G__14945 = 0;
seq__14921_14925 = G__14942;
chunk__14922_14926 = G__14943;
count__14923_14927 = G__14944;
i__14924_14928 = G__14945;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14946){
var content = cljs.core.first(arglist__14946);
arglist__14946 = cljs.core.next(arglist__14946);
var name = cljs.core.first(arglist__14946);
var value = cljs.core.rest(arglist__14946);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__14951_14955 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14952_14956 = null;var count__14953_14957 = 0;var i__14954_14958 = 0;while(true){
if((i__14954_14958 < count__14953_14957))
{var n_14959 = cljs.core._nth.call(null,chunk__14952_14956,i__14954_14958);n_14959.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14960 = seq__14951_14955;
var G__14961 = chunk__14952_14956;
var G__14962 = count__14953_14957;
var G__14963 = (i__14954_14958 + 1);
seq__14951_14955 = G__14960;
chunk__14952_14956 = G__14961;
count__14953_14957 = G__14962;
i__14954_14958 = G__14963;
continue;
}
} else
{var temp__4092__auto___14964 = cljs.core.seq.call(null,seq__14951_14955);if(temp__4092__auto___14964)
{var seq__14951_14965__$1 = temp__4092__auto___14964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14951_14965__$1))
{var c__4148__auto___14966 = cljs.core.chunk_first.call(null,seq__14951_14965__$1);{
var G__14967 = cljs.core.chunk_rest.call(null,seq__14951_14965__$1);
var G__14968 = c__4148__auto___14966;
var G__14969 = cljs.core.count.call(null,c__4148__auto___14966);
var G__14970 = 0;
seq__14951_14955 = G__14967;
chunk__14952_14956 = G__14968;
count__14953_14957 = G__14969;
i__14954_14958 = G__14970;
continue;
}
} else
{var n_14971 = cljs.core.first.call(null,seq__14951_14965__$1);n_14971.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14972 = cljs.core.next.call(null,seq__14951_14965__$1);
var G__14973 = null;
var G__14974 = 0;
var G__14975 = 0;
seq__14951_14955 = G__14972;
chunk__14952_14956 = G__14973;
count__14953_14957 = G__14974;
i__14954_14958 = G__14975;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14976){
var content = cljs.core.first(arglist__14976);
arglist__14976 = cljs.core.next(arglist__14976);
var name = cljs.core.first(arglist__14976);
var value = cljs.core.rest(arglist__14976);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14981_14985 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14982_14986 = null;var count__14983_14987 = 0;var i__14984_14988 = 0;while(true){
if((i__14984_14988 < count__14983_14987))
{var n_14989 = cljs.core._nth.call(null,chunk__14982_14986,i__14984_14988);n_14989.removeAttribute(cljs.core.name.call(null,name));
{
var G__14990 = seq__14981_14985;
var G__14991 = chunk__14982_14986;
var G__14992 = count__14983_14987;
var G__14993 = (i__14984_14988 + 1);
seq__14981_14985 = G__14990;
chunk__14982_14986 = G__14991;
count__14983_14987 = G__14992;
i__14984_14988 = G__14993;
continue;
}
} else
{var temp__4092__auto___14994 = cljs.core.seq.call(null,seq__14981_14985);if(temp__4092__auto___14994)
{var seq__14981_14995__$1 = temp__4092__auto___14994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14981_14995__$1))
{var c__4148__auto___14996 = cljs.core.chunk_first.call(null,seq__14981_14995__$1);{
var G__14997 = cljs.core.chunk_rest.call(null,seq__14981_14995__$1);
var G__14998 = c__4148__auto___14996;
var G__14999 = cljs.core.count.call(null,c__4148__auto___14996);
var G__15000 = 0;
seq__14981_14985 = G__14997;
chunk__14982_14986 = G__14998;
count__14983_14987 = G__14999;
i__14984_14988 = G__15000;
continue;
}
} else
{var n_15001 = cljs.core.first.call(null,seq__14981_14995__$1);n_15001.removeAttribute(cljs.core.name.call(null,name));
{
var G__15002 = cljs.core.next.call(null,seq__14981_14995__$1);
var G__15003 = null;
var G__15004 = 0;
var G__15005 = 0;
seq__14981_14985 = G__15002;
chunk__14982_14986 = G__15003;
count__14983_14987 = G__15004;
i__14984_14988 = G__15005;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15007 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15007,0,null);var v = cljs.core.nth.call(null,vec__15007,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15008_SHARP_){var attr = attrs__$1.item(p1__15008_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15015_15021 = cljs.core.seq.call(null,styles);var chunk__15016_15022 = null;var count__15017_15023 = 0;var i__15018_15024 = 0;while(true){
if((i__15018_15024 < count__15017_15023))
{var vec__15019_15025 = cljs.core._nth.call(null,chunk__15016_15022,i__15018_15024);var name_15026 = cljs.core.nth.call(null,vec__15019_15025,0,null);var value_15027 = cljs.core.nth.call(null,vec__15019_15025,1,null);domina.set_style_BANG_.call(null,content,name_15026,value_15027);
{
var G__15028 = seq__15015_15021;
var G__15029 = chunk__15016_15022;
var G__15030 = count__15017_15023;
var G__15031 = (i__15018_15024 + 1);
seq__15015_15021 = G__15028;
chunk__15016_15022 = G__15029;
count__15017_15023 = G__15030;
i__15018_15024 = G__15031;
continue;
}
} else
{var temp__4092__auto___15032 = cljs.core.seq.call(null,seq__15015_15021);if(temp__4092__auto___15032)
{var seq__15015_15033__$1 = temp__4092__auto___15032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15015_15033__$1))
{var c__4148__auto___15034 = cljs.core.chunk_first.call(null,seq__15015_15033__$1);{
var G__15035 = cljs.core.chunk_rest.call(null,seq__15015_15033__$1);
var G__15036 = c__4148__auto___15034;
var G__15037 = cljs.core.count.call(null,c__4148__auto___15034);
var G__15038 = 0;
seq__15015_15021 = G__15035;
chunk__15016_15022 = G__15036;
count__15017_15023 = G__15037;
i__15018_15024 = G__15038;
continue;
}
} else
{var vec__15020_15039 = cljs.core.first.call(null,seq__15015_15033__$1);var name_15040 = cljs.core.nth.call(null,vec__15020_15039,0,null);var value_15041 = cljs.core.nth.call(null,vec__15020_15039,1,null);domina.set_style_BANG_.call(null,content,name_15040,value_15041);
{
var G__15042 = cljs.core.next.call(null,seq__15015_15033__$1);
var G__15043 = null;
var G__15044 = 0;
var G__15045 = 0;
seq__15015_15021 = G__15042;
chunk__15016_15022 = G__15043;
count__15017_15023 = G__15044;
i__15018_15024 = G__15045;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15052_15058 = cljs.core.seq.call(null,attrs);var chunk__15053_15059 = null;var count__15054_15060 = 0;var i__15055_15061 = 0;while(true){
if((i__15055_15061 < count__15054_15060))
{var vec__15056_15062 = cljs.core._nth.call(null,chunk__15053_15059,i__15055_15061);var name_15063 = cljs.core.nth.call(null,vec__15056_15062,0,null);var value_15064 = cljs.core.nth.call(null,vec__15056_15062,1,null);domina.set_attr_BANG_.call(null,content,name_15063,value_15064);
{
var G__15065 = seq__15052_15058;
var G__15066 = chunk__15053_15059;
var G__15067 = count__15054_15060;
var G__15068 = (i__15055_15061 + 1);
seq__15052_15058 = G__15065;
chunk__15053_15059 = G__15066;
count__15054_15060 = G__15067;
i__15055_15061 = G__15068;
continue;
}
} else
{var temp__4092__auto___15069 = cljs.core.seq.call(null,seq__15052_15058);if(temp__4092__auto___15069)
{var seq__15052_15070__$1 = temp__4092__auto___15069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15052_15070__$1))
{var c__4148__auto___15071 = cljs.core.chunk_first.call(null,seq__15052_15070__$1);{
var G__15072 = cljs.core.chunk_rest.call(null,seq__15052_15070__$1);
var G__15073 = c__4148__auto___15071;
var G__15074 = cljs.core.count.call(null,c__4148__auto___15071);
var G__15075 = 0;
seq__15052_15058 = G__15072;
chunk__15053_15059 = G__15073;
count__15054_15060 = G__15074;
i__15055_15061 = G__15075;
continue;
}
} else
{var vec__15057_15076 = cljs.core.first.call(null,seq__15052_15070__$1);var name_15077 = cljs.core.nth.call(null,vec__15057_15076,0,null);var value_15078 = cljs.core.nth.call(null,vec__15057_15076,1,null);domina.set_attr_BANG_.call(null,content,name_15077,value_15078);
{
var G__15079 = cljs.core.next.call(null,seq__15052_15070__$1);
var G__15080 = null;
var G__15081 = 0;
var G__15082 = 0;
seq__15052_15058 = G__15079;
chunk__15053_15059 = G__15080;
count__15054_15060 = G__15081;
i__15055_15061 = G__15082;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15087_15091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15088_15092 = null;var count__15089_15093 = 0;var i__15090_15094 = 0;while(true){
if((i__15090_15094 < count__15089_15093))
{var node_15095 = cljs.core._nth.call(null,chunk__15088_15092,i__15090_15094);goog.dom.classes.add(node_15095,class$);
{
var G__15096 = seq__15087_15091;
var G__15097 = chunk__15088_15092;
var G__15098 = count__15089_15093;
var G__15099 = (i__15090_15094 + 1);
seq__15087_15091 = G__15096;
chunk__15088_15092 = G__15097;
count__15089_15093 = G__15098;
i__15090_15094 = G__15099;
continue;
}
} else
{var temp__4092__auto___15100 = cljs.core.seq.call(null,seq__15087_15091);if(temp__4092__auto___15100)
{var seq__15087_15101__$1 = temp__4092__auto___15100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15087_15101__$1))
{var c__4148__auto___15102 = cljs.core.chunk_first.call(null,seq__15087_15101__$1);{
var G__15103 = cljs.core.chunk_rest.call(null,seq__15087_15101__$1);
var G__15104 = c__4148__auto___15102;
var G__15105 = cljs.core.count.call(null,c__4148__auto___15102);
var G__15106 = 0;
seq__15087_15091 = G__15103;
chunk__15088_15092 = G__15104;
count__15089_15093 = G__15105;
i__15090_15094 = G__15106;
continue;
}
} else
{var node_15107 = cljs.core.first.call(null,seq__15087_15101__$1);goog.dom.classes.add(node_15107,class$);
{
var G__15108 = cljs.core.next.call(null,seq__15087_15101__$1);
var G__15109 = null;
var G__15110 = 0;
var G__15111 = 0;
seq__15087_15091 = G__15108;
chunk__15088_15092 = G__15109;
count__15089_15093 = G__15110;
i__15090_15094 = G__15111;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15116_15120 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15117_15121 = null;var count__15118_15122 = 0;var i__15119_15123 = 0;while(true){
if((i__15119_15123 < count__15118_15122))
{var node_15124 = cljs.core._nth.call(null,chunk__15117_15121,i__15119_15123);goog.dom.classes.remove(node_15124,class$);
{
var G__15125 = seq__15116_15120;
var G__15126 = chunk__15117_15121;
var G__15127 = count__15118_15122;
var G__15128 = (i__15119_15123 + 1);
seq__15116_15120 = G__15125;
chunk__15117_15121 = G__15126;
count__15118_15122 = G__15127;
i__15119_15123 = G__15128;
continue;
}
} else
{var temp__4092__auto___15129 = cljs.core.seq.call(null,seq__15116_15120);if(temp__4092__auto___15129)
{var seq__15116_15130__$1 = temp__4092__auto___15129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15116_15130__$1))
{var c__4148__auto___15131 = cljs.core.chunk_first.call(null,seq__15116_15130__$1);{
var G__15132 = cljs.core.chunk_rest.call(null,seq__15116_15130__$1);
var G__15133 = c__4148__auto___15131;
var G__15134 = cljs.core.count.call(null,c__4148__auto___15131);
var G__15135 = 0;
seq__15116_15120 = G__15132;
chunk__15117_15121 = G__15133;
count__15118_15122 = G__15134;
i__15119_15123 = G__15135;
continue;
}
} else
{var node_15136 = cljs.core.first.call(null,seq__15116_15130__$1);goog.dom.classes.remove(node_15136,class$);
{
var G__15137 = cljs.core.next.call(null,seq__15116_15130__$1);
var G__15138 = null;
var G__15139 = 0;
var G__15140 = 0;
seq__15116_15120 = G__15137;
chunk__15117_15121 = G__15138;
count__15118_15122 = G__15139;
i__15119_15123 = G__15140;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15145_15149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15146_15150 = null;var count__15147_15151 = 0;var i__15148_15152 = 0;while(true){
if((i__15148_15152 < count__15147_15151))
{var node_15153 = cljs.core._nth.call(null,chunk__15146_15150,i__15148_15152);goog.dom.classes.toggle(node_15153,class$);
{
var G__15154 = seq__15145_15149;
var G__15155 = chunk__15146_15150;
var G__15156 = count__15147_15151;
var G__15157 = (i__15148_15152 + 1);
seq__15145_15149 = G__15154;
chunk__15146_15150 = G__15155;
count__15147_15151 = G__15156;
i__15148_15152 = G__15157;
continue;
}
} else
{var temp__4092__auto___15158 = cljs.core.seq.call(null,seq__15145_15149);if(temp__4092__auto___15158)
{var seq__15145_15159__$1 = temp__4092__auto___15158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15145_15159__$1))
{var c__4148__auto___15160 = cljs.core.chunk_first.call(null,seq__15145_15159__$1);{
var G__15161 = cljs.core.chunk_rest.call(null,seq__15145_15159__$1);
var G__15162 = c__4148__auto___15160;
var G__15163 = cljs.core.count.call(null,c__4148__auto___15160);
var G__15164 = 0;
seq__15145_15149 = G__15161;
chunk__15146_15150 = G__15162;
count__15147_15151 = G__15163;
i__15148_15152 = G__15164;
continue;
}
} else
{var node_15165 = cljs.core.first.call(null,seq__15145_15159__$1);goog.dom.classes.toggle(node_15165,class$);
{
var G__15166 = cljs.core.next.call(null,seq__15145_15159__$1);
var G__15167 = null;
var G__15168 = 0;
var G__15169 = 0;
seq__15145_15149 = G__15166;
chunk__15146_15150 = G__15167;
count__15147_15151 = G__15168;
i__15148_15152 = G__15169;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15178__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15174_15179 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15175_15180 = null;var count__15176_15181 = 0;var i__15177_15182 = 0;while(true){
if((i__15177_15182 < count__15176_15181))
{var node_15183 = cljs.core._nth.call(null,chunk__15175_15180,i__15177_15182);goog.dom.classes.set(node_15183,classes_15178__$1);
{
var G__15184 = seq__15174_15179;
var G__15185 = chunk__15175_15180;
var G__15186 = count__15176_15181;
var G__15187 = (i__15177_15182 + 1);
seq__15174_15179 = G__15184;
chunk__15175_15180 = G__15185;
count__15176_15181 = G__15186;
i__15177_15182 = G__15187;
continue;
}
} else
{var temp__4092__auto___15188 = cljs.core.seq.call(null,seq__15174_15179);if(temp__4092__auto___15188)
{var seq__15174_15189__$1 = temp__4092__auto___15188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15174_15189__$1))
{var c__4148__auto___15190 = cljs.core.chunk_first.call(null,seq__15174_15189__$1);{
var G__15191 = cljs.core.chunk_rest.call(null,seq__15174_15189__$1);
var G__15192 = c__4148__auto___15190;
var G__15193 = cljs.core.count.call(null,c__4148__auto___15190);
var G__15194 = 0;
seq__15174_15179 = G__15191;
chunk__15175_15180 = G__15192;
count__15176_15181 = G__15193;
i__15177_15182 = G__15194;
continue;
}
} else
{var node_15195 = cljs.core.first.call(null,seq__15174_15189__$1);goog.dom.classes.set(node_15195,classes_15178__$1);
{
var G__15196 = cljs.core.next.call(null,seq__15174_15189__$1);
var G__15197 = null;
var G__15198 = 0;
var G__15199 = 0;
seq__15174_15179 = G__15196;
chunk__15175_15180 = G__15197;
count__15176_15181 = G__15198;
i__15177_15182 = G__15199;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15204_15208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15205_15209 = null;var count__15206_15210 = 0;var i__15207_15211 = 0;while(true){
if((i__15207_15211 < count__15206_15210))
{var node_15212 = cljs.core._nth.call(null,chunk__15205_15209,i__15207_15211);goog.dom.setTextContent(node_15212,value);
{
var G__15213 = seq__15204_15208;
var G__15214 = chunk__15205_15209;
var G__15215 = count__15206_15210;
var G__15216 = (i__15207_15211 + 1);
seq__15204_15208 = G__15213;
chunk__15205_15209 = G__15214;
count__15206_15210 = G__15215;
i__15207_15211 = G__15216;
continue;
}
} else
{var temp__4092__auto___15217 = cljs.core.seq.call(null,seq__15204_15208);if(temp__4092__auto___15217)
{var seq__15204_15218__$1 = temp__4092__auto___15217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15204_15218__$1))
{var c__4148__auto___15219 = cljs.core.chunk_first.call(null,seq__15204_15218__$1);{
var G__15220 = cljs.core.chunk_rest.call(null,seq__15204_15218__$1);
var G__15221 = c__4148__auto___15219;
var G__15222 = cljs.core.count.call(null,c__4148__auto___15219);
var G__15223 = 0;
seq__15204_15208 = G__15220;
chunk__15205_15209 = G__15221;
count__15206_15210 = G__15222;
i__15207_15211 = G__15223;
continue;
}
} else
{var node_15224 = cljs.core.first.call(null,seq__15204_15218__$1);goog.dom.setTextContent(node_15224,value);
{
var G__15225 = cljs.core.next.call(null,seq__15204_15218__$1);
var G__15226 = null;
var G__15227 = 0;
var G__15228 = 0;
seq__15204_15208 = G__15225;
chunk__15205_15209 = G__15226;
count__15206_15210 = G__15227;
i__15207_15211 = G__15228;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15233_15237 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15234_15238 = null;var count__15235_15239 = 0;var i__15236_15240 = 0;while(true){
if((i__15236_15240 < count__15235_15239))
{var node_15241 = cljs.core._nth.call(null,chunk__15234_15238,i__15236_15240);goog.dom.forms.setValue(node_15241,value);
{
var G__15242 = seq__15233_15237;
var G__15243 = chunk__15234_15238;
var G__15244 = count__15235_15239;
var G__15245 = (i__15236_15240 + 1);
seq__15233_15237 = G__15242;
chunk__15234_15238 = G__15243;
count__15235_15239 = G__15244;
i__15236_15240 = G__15245;
continue;
}
} else
{var temp__4092__auto___15246 = cljs.core.seq.call(null,seq__15233_15237);if(temp__4092__auto___15246)
{var seq__15233_15247__$1 = temp__4092__auto___15246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15233_15247__$1))
{var c__4148__auto___15248 = cljs.core.chunk_first.call(null,seq__15233_15247__$1);{
var G__15249 = cljs.core.chunk_rest.call(null,seq__15233_15247__$1);
var G__15250 = c__4148__auto___15248;
var G__15251 = cljs.core.count.call(null,c__4148__auto___15248);
var G__15252 = 0;
seq__15233_15237 = G__15249;
chunk__15234_15238 = G__15250;
count__15235_15239 = G__15251;
i__15236_15240 = G__15252;
continue;
}
} else
{var node_15253 = cljs.core.first.call(null,seq__15233_15247__$1);goog.dom.forms.setValue(node_15253,value);
{
var G__15254 = cljs.core.next.call(null,seq__15233_15247__$1);
var G__15255 = null;
var G__15256 = 0;
var G__15257 = 0;
seq__15233_15237 = G__15254;
chunk__15234_15238 = G__15255;
count__15235_15239 = G__15256;
i__15236_15240 = G__15257;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_15268 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15264_15269 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15265_15270 = null;var count__15266_15271 = 0;var i__15267_15272 = 0;while(true){
if((i__15267_15272 < count__15266_15271))
{var node_15273 = cljs.core._nth.call(null,chunk__15265_15270,i__15267_15272);node_15273.innerHTML = value_15268;
{
var G__15274 = seq__15264_15269;
var G__15275 = chunk__15265_15270;
var G__15276 = count__15266_15271;
var G__15277 = (i__15267_15272 + 1);
seq__15264_15269 = G__15274;
chunk__15265_15270 = G__15275;
count__15266_15271 = G__15276;
i__15267_15272 = G__15277;
continue;
}
} else
{var temp__4092__auto___15278 = cljs.core.seq.call(null,seq__15264_15269);if(temp__4092__auto___15278)
{var seq__15264_15279__$1 = temp__4092__auto___15278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15264_15279__$1))
{var c__4148__auto___15280 = cljs.core.chunk_first.call(null,seq__15264_15279__$1);{
var G__15281 = cljs.core.chunk_rest.call(null,seq__15264_15279__$1);
var G__15282 = c__4148__auto___15280;
var G__15283 = cljs.core.count.call(null,c__4148__auto___15280);
var G__15284 = 0;
seq__15264_15269 = G__15281;
chunk__15265_15270 = G__15282;
count__15266_15271 = G__15283;
i__15267_15272 = G__15284;
continue;
}
} else
{var node_15285 = cljs.core.first.call(null,seq__15264_15279__$1);node_15285.innerHTML = value_15268;
{
var G__15286 = cljs.core.next.call(null,seq__15264_15279__$1);
var G__15287 = null;
var G__15288 = 0;
var G__15289 = 0;
seq__15264_15269 = G__15286;
chunk__15265_15270 = G__15287;
count__15266_15271 = G__15288;
i__15267_15272 = G__15289;
continue;
}
}
} else
{}
}
break;
}
}catch (e15263){if((e15263 instanceof Error))
{var e_15290 = e15263;domina.replace_children_BANG_.call(null,content,value_15268);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15263;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15297_15301 = cljs.core.seq.call(null,children);var chunk__15298_15302 = null;var count__15299_15303 = 0;var i__15300_15304 = 0;while(true){
if((i__15300_15304 < count__15299_15303))
{var child_15305 = cljs.core._nth.call(null,chunk__15298_15302,i__15300_15304);frag.appendChild(child_15305);
{
var G__15306 = seq__15297_15301;
var G__15307 = chunk__15298_15302;
var G__15308 = count__15299_15303;
var G__15309 = (i__15300_15304 + 1);
seq__15297_15301 = G__15306;
chunk__15298_15302 = G__15307;
count__15299_15303 = G__15308;
i__15300_15304 = G__15309;
continue;
}
} else
{var temp__4092__auto___15310 = cljs.core.seq.call(null,seq__15297_15301);if(temp__4092__auto___15310)
{var seq__15297_15311__$1 = temp__4092__auto___15310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15297_15311__$1))
{var c__4148__auto___15312 = cljs.core.chunk_first.call(null,seq__15297_15311__$1);{
var G__15313 = cljs.core.chunk_rest.call(null,seq__15297_15311__$1);
var G__15314 = c__4148__auto___15312;
var G__15315 = cljs.core.count.call(null,c__4148__auto___15312);
var G__15316 = 0;
seq__15297_15301 = G__15313;
chunk__15298_15302 = G__15314;
count__15299_15303 = G__15315;
i__15300_15304 = G__15316;
continue;
}
} else
{var child_15317 = cljs.core.first.call(null,seq__15297_15311__$1);frag.appendChild(child_15317);
{
var G__15318 = cljs.core.next.call(null,seq__15297_15311__$1);
var G__15319 = null;
var G__15320 = 0;
var G__15321 = 0;
seq__15297_15301 = G__15318;
chunk__15298_15302 = G__15319;
count__15299_15303 = G__15320;
i__15300_15304 = G__15321;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15291_SHARP_,p2__15292_SHARP_){return f.call(null,p1__15291_SHARP_,p2__15292_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15323 = list_thing;if(G__15323)
{var bit__4050__auto__ = (G__15323.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15323.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15323.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15323);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__15324 = content;if(G__15324)
{var bit__4050__auto__ = (G__15324.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15324.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15324);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__15325 = content;if(G__15325)
{var bit__4050__auto__ = (G__15325.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15325.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15325);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15325);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map