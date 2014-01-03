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
var opt_wrapper_20719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_20721 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$67,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_20720,table_section_wrapper_20720,opt_wrapper_20719,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_20721,table_section_wrapper_20720,cell_wrapper_20721,opt_wrapper_20719,table_section_wrapper_20720,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_20720]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__20726 = cljs.core.seq(tbody);var chunk__20727 = null;var count__20728 = 0;var i__20729 = 0;while(true){
if((i__20729 < count__20728))
{var child = chunk__20727.cljs$core$IIndexed$_nth$arity$2(null,i__20729);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20730 = seq__20726;
var G__20731 = chunk__20727;
var G__20732 = count__20728;
var G__20733 = (i__20729 + 1);
seq__20726 = G__20730;
chunk__20727 = G__20731;
count__20728 = G__20732;
i__20729 = G__20733;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__20726);if(temp__4092__auto__)
{var seq__20726__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__20726__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__20726__$1);{
var G__20734 = cljs.core.chunk_rest(seq__20726__$1);
var G__20735 = c__4148__auto__;
var G__20736 = cljs.core.count(c__4148__auto__);
var G__20737 = 0;
seq__20726 = G__20734;
chunk__20727 = G__20735;
count__20728 = G__20736;
i__20729 = G__20737;
continue;
}
} else
{var child = cljs.core.first(seq__20726__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20738 = cljs.core.next(seq__20726__$1);
var G__20739 = null;
var G__20740 = 0;
var G__20741 = 0;
seq__20726 = G__20738;
chunk__20727 = G__20739;
count__20728 = G__20740;
i__20729 = G__20741;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__20743 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20743,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20743,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20743,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__20744 = wrapper.lastChild;
var G__20745 = (level - 1);
wrapper = G__20744;
level = G__20745;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj20747 = {};return obj20747;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__20748){
var mesg = cljs.core.seq(arglist__20748);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__20749){
var mesg = cljs.core.seq(arglist__20749);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__20750){
var contents = cljs.core.seq(arglist__20750);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20751_SHARP_){return p1__20751_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__20752_SHARP_,p2__20753_SHARP_){return goog.dom.insertChildAt(p1__20752_SHARP_,p2__20753_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__20752_SHARP_,p2__20753_SHARP_){return goog.dom.insertChildAt(p1__20752_SHARP_,p2__20753_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__20755_SHARP_,p2__20754_SHARP_){return goog.dom.insertSiblingBefore(p2__20754_SHARP_,p1__20755_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__20755_SHARP_,p2__20754_SHARP_){return goog.dom.insertSiblingBefore(p2__20754_SHARP_,p1__20755_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__20757_SHARP_,p2__20756_SHARP_){return goog.dom.insertSiblingAfter(p2__20756_SHARP_,p1__20757_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__20757_SHARP_,p2__20756_SHARP_){return goog.dom.insertSiblingAfter(p2__20756_SHARP_,p1__20757_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__20759_SHARP_,p2__20758_SHARP_){return goog.dom.replaceNode(p2__20758_SHARP_,p1__20759_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__20759_SHARP_,p2__20758_SHARP_){return goog.dom.replaceNode(p2__20758_SHARP_,p1__20759_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__20764_20768 = cljs.core.seq(domina.nodes(content));var chunk__20765_20769 = null;var count__20766_20770 = 0;var i__20767_20771 = 0;while(true){
if((i__20767_20771 < count__20766_20770))
{var n_20772 = chunk__20765_20769.cljs$core$IIndexed$_nth$arity$2(null,i__20767_20771);goog.style.setStyle(n_20772,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__20773 = seq__20764_20768;
var G__20774 = chunk__20765_20769;
var G__20775 = count__20766_20770;
var G__20776 = (i__20767_20771 + 1);
seq__20764_20768 = G__20773;
chunk__20765_20769 = G__20774;
count__20766_20770 = G__20775;
i__20767_20771 = G__20776;
continue;
}
} else
{var temp__4092__auto___20777 = cljs.core.seq(seq__20764_20768);if(temp__4092__auto___20777)
{var seq__20764_20778__$1 = temp__4092__auto___20777;if(cljs.core.chunked_seq_QMARK_(seq__20764_20778__$1))
{var c__4148__auto___20779 = cljs.core.chunk_first(seq__20764_20778__$1);{
var G__20780 = cljs.core.chunk_rest(seq__20764_20778__$1);
var G__20781 = c__4148__auto___20779;
var G__20782 = cljs.core.count(c__4148__auto___20779);
var G__20783 = 0;
seq__20764_20768 = G__20780;
chunk__20765_20769 = G__20781;
count__20766_20770 = G__20782;
i__20767_20771 = G__20783;
continue;
}
} else
{var n_20784 = cljs.core.first(seq__20764_20778__$1);goog.style.setStyle(n_20784,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__20785 = cljs.core.next(seq__20764_20778__$1);
var G__20786 = null;
var G__20787 = 0;
var G__20788 = 0;
seq__20764_20768 = G__20785;
chunk__20765_20769 = G__20786;
count__20766_20770 = G__20787;
i__20767_20771 = G__20788;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20789){
var content = cljs.core.first(arglist__20789);
arglist__20789 = cljs.core.next(arglist__20789);
var name = cljs.core.first(arglist__20789);
var value = cljs.core.rest(arglist__20789);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20794_20798 = cljs.core.seq(domina.nodes(content));var chunk__20795_20799 = null;var count__20796_20800 = 0;var i__20797_20801 = 0;while(true){
if((i__20797_20801 < count__20796_20800))
{var n_20802 = chunk__20795_20799.cljs$core$IIndexed$_nth$arity$2(null,i__20797_20801);n_20802.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__20803 = seq__20794_20798;
var G__20804 = chunk__20795_20799;
var G__20805 = count__20796_20800;
var G__20806 = (i__20797_20801 + 1);
seq__20794_20798 = G__20803;
chunk__20795_20799 = G__20804;
count__20796_20800 = G__20805;
i__20797_20801 = G__20806;
continue;
}
} else
{var temp__4092__auto___20807 = cljs.core.seq(seq__20794_20798);if(temp__4092__auto___20807)
{var seq__20794_20808__$1 = temp__4092__auto___20807;if(cljs.core.chunked_seq_QMARK_(seq__20794_20808__$1))
{var c__4148__auto___20809 = cljs.core.chunk_first(seq__20794_20808__$1);{
var G__20810 = cljs.core.chunk_rest(seq__20794_20808__$1);
var G__20811 = c__4148__auto___20809;
var G__20812 = cljs.core.count(c__4148__auto___20809);
var G__20813 = 0;
seq__20794_20798 = G__20810;
chunk__20795_20799 = G__20811;
count__20796_20800 = G__20812;
i__20797_20801 = G__20813;
continue;
}
} else
{var n_20814 = cljs.core.first(seq__20794_20808__$1);n_20814.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__20815 = cljs.core.next(seq__20794_20808__$1);
var G__20816 = null;
var G__20817 = 0;
var G__20818 = 0;
seq__20794_20798 = G__20815;
chunk__20795_20799 = G__20816;
count__20796_20800 = G__20817;
i__20797_20801 = G__20818;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20819){
var content = cljs.core.first(arglist__20819);
arglist__20819 = cljs.core.next(arglist__20819);
var name = cljs.core.first(arglist__20819);
var value = cljs.core.rest(arglist__20819);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20824_20828 = cljs.core.seq(domina.nodes(content));var chunk__20825_20829 = null;var count__20826_20830 = 0;var i__20827_20831 = 0;while(true){
if((i__20827_20831 < count__20826_20830))
{var n_20832 = chunk__20825_20829.cljs$core$IIndexed$_nth$arity$2(null,i__20827_20831);n_20832.removeAttribute(cljs.core.name(name));
{
var G__20833 = seq__20824_20828;
var G__20834 = chunk__20825_20829;
var G__20835 = count__20826_20830;
var G__20836 = (i__20827_20831 + 1);
seq__20824_20828 = G__20833;
chunk__20825_20829 = G__20834;
count__20826_20830 = G__20835;
i__20827_20831 = G__20836;
continue;
}
} else
{var temp__4092__auto___20837 = cljs.core.seq(seq__20824_20828);if(temp__4092__auto___20837)
{var seq__20824_20838__$1 = temp__4092__auto___20837;if(cljs.core.chunked_seq_QMARK_(seq__20824_20838__$1))
{var c__4148__auto___20839 = cljs.core.chunk_first(seq__20824_20838__$1);{
var G__20840 = cljs.core.chunk_rest(seq__20824_20838__$1);
var G__20841 = c__4148__auto___20839;
var G__20842 = cljs.core.count(c__4148__auto___20839);
var G__20843 = 0;
seq__20824_20828 = G__20840;
chunk__20825_20829 = G__20841;
count__20826_20830 = G__20842;
i__20827_20831 = G__20843;
continue;
}
} else
{var n_20844 = cljs.core.first(seq__20824_20838__$1);n_20844.removeAttribute(cljs.core.name(name));
{
var G__20845 = cljs.core.next(seq__20824_20838__$1);
var G__20846 = null;
var G__20847 = 0;
var G__20848 = 0;
seq__20824_20828 = G__20845;
chunk__20825_20829 = G__20846;
count__20826_20830 = G__20847;
i__20827_20831 = G__20848;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__20850 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20850,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20850,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$66)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20851_SHARP_){var attr = attrs__$1.item(p1__20851_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20858_20864 = cljs.core.seq(styles);var chunk__20859_20865 = null;var count__20860_20866 = 0;var i__20861_20867 = 0;while(true){
if((i__20861_20867 < count__20860_20866))
{var vec__20862_20868 = chunk__20859_20865.cljs$core$IIndexed$_nth$arity$2(null,i__20861_20867);var name_20869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862_20868,0,null);var value_20870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862_20868,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20869,cljs.core.array_seq([value_20870], 0));
{
var G__20871 = seq__20858_20864;
var G__20872 = chunk__20859_20865;
var G__20873 = count__20860_20866;
var G__20874 = (i__20861_20867 + 1);
seq__20858_20864 = G__20871;
chunk__20859_20865 = G__20872;
count__20860_20866 = G__20873;
i__20861_20867 = G__20874;
continue;
}
} else
{var temp__4092__auto___20875 = cljs.core.seq(seq__20858_20864);if(temp__4092__auto___20875)
{var seq__20858_20876__$1 = temp__4092__auto___20875;if(cljs.core.chunked_seq_QMARK_(seq__20858_20876__$1))
{var c__4148__auto___20877 = cljs.core.chunk_first(seq__20858_20876__$1);{
var G__20878 = cljs.core.chunk_rest(seq__20858_20876__$1);
var G__20879 = c__4148__auto___20877;
var G__20880 = cljs.core.count(c__4148__auto___20877);
var G__20881 = 0;
seq__20858_20864 = G__20878;
chunk__20859_20865 = G__20879;
count__20860_20866 = G__20880;
i__20861_20867 = G__20881;
continue;
}
} else
{var vec__20863_20882 = cljs.core.first(seq__20858_20876__$1);var name_20883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20863_20882,0,null);var value_20884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20863_20882,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20883,cljs.core.array_seq([value_20884], 0));
{
var G__20885 = cljs.core.next(seq__20858_20876__$1);
var G__20886 = null;
var G__20887 = 0;
var G__20888 = 0;
seq__20858_20864 = G__20885;
chunk__20859_20865 = G__20886;
count__20860_20866 = G__20887;
i__20861_20867 = G__20888;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20895_20901 = cljs.core.seq(attrs);var chunk__20896_20902 = null;var count__20897_20903 = 0;var i__20898_20904 = 0;while(true){
if((i__20898_20904 < count__20897_20903))
{var vec__20899_20905 = chunk__20896_20902.cljs$core$IIndexed$_nth$arity$2(null,i__20898_20904);var name_20906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20899_20905,0,null);var value_20907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20899_20905,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20906,cljs.core.array_seq([value_20907], 0));
{
var G__20908 = seq__20895_20901;
var G__20909 = chunk__20896_20902;
var G__20910 = count__20897_20903;
var G__20911 = (i__20898_20904 + 1);
seq__20895_20901 = G__20908;
chunk__20896_20902 = G__20909;
count__20897_20903 = G__20910;
i__20898_20904 = G__20911;
continue;
}
} else
{var temp__4092__auto___20912 = cljs.core.seq(seq__20895_20901);if(temp__4092__auto___20912)
{var seq__20895_20913__$1 = temp__4092__auto___20912;if(cljs.core.chunked_seq_QMARK_(seq__20895_20913__$1))
{var c__4148__auto___20914 = cljs.core.chunk_first(seq__20895_20913__$1);{
var G__20915 = cljs.core.chunk_rest(seq__20895_20913__$1);
var G__20916 = c__4148__auto___20914;
var G__20917 = cljs.core.count(c__4148__auto___20914);
var G__20918 = 0;
seq__20895_20901 = G__20915;
chunk__20896_20902 = G__20916;
count__20897_20903 = G__20917;
i__20898_20904 = G__20918;
continue;
}
} else
{var vec__20900_20919 = cljs.core.first(seq__20895_20913__$1);var name_20920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20900_20919,0,null);var value_20921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20900_20919,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20920,cljs.core.array_seq([value_20921], 0));
{
var G__20922 = cljs.core.next(seq__20895_20913__$1);
var G__20923 = null;
var G__20924 = 0;
var G__20925 = 0;
seq__20895_20901 = G__20922;
chunk__20896_20902 = G__20923;
count__20897_20903 = G__20924;
i__20898_20904 = G__20925;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20930_20934 = cljs.core.seq(domina.nodes(content));var chunk__20931_20935 = null;var count__20932_20936 = 0;var i__20933_20937 = 0;while(true){
if((i__20933_20937 < count__20932_20936))
{var node_20938 = chunk__20931_20935.cljs$core$IIndexed$_nth$arity$2(null,i__20933_20937);goog.dom.classes.add(node_20938,class$);
{
var G__20939 = seq__20930_20934;
var G__20940 = chunk__20931_20935;
var G__20941 = count__20932_20936;
var G__20942 = (i__20933_20937 + 1);
seq__20930_20934 = G__20939;
chunk__20931_20935 = G__20940;
count__20932_20936 = G__20941;
i__20933_20937 = G__20942;
continue;
}
} else
{var temp__4092__auto___20943 = cljs.core.seq(seq__20930_20934);if(temp__4092__auto___20943)
{var seq__20930_20944__$1 = temp__4092__auto___20943;if(cljs.core.chunked_seq_QMARK_(seq__20930_20944__$1))
{var c__4148__auto___20945 = cljs.core.chunk_first(seq__20930_20944__$1);{
var G__20946 = cljs.core.chunk_rest(seq__20930_20944__$1);
var G__20947 = c__4148__auto___20945;
var G__20948 = cljs.core.count(c__4148__auto___20945);
var G__20949 = 0;
seq__20930_20934 = G__20946;
chunk__20931_20935 = G__20947;
count__20932_20936 = G__20948;
i__20933_20937 = G__20949;
continue;
}
} else
{var node_20950 = cljs.core.first(seq__20930_20944__$1);goog.dom.classes.add(node_20950,class$);
{
var G__20951 = cljs.core.next(seq__20930_20944__$1);
var G__20952 = null;
var G__20953 = 0;
var G__20954 = 0;
seq__20930_20934 = G__20951;
chunk__20931_20935 = G__20952;
count__20932_20936 = G__20953;
i__20933_20937 = G__20954;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20959_20963 = cljs.core.seq(domina.nodes(content));var chunk__20960_20964 = null;var count__20961_20965 = 0;var i__20962_20966 = 0;while(true){
if((i__20962_20966 < count__20961_20965))
{var node_20967 = chunk__20960_20964.cljs$core$IIndexed$_nth$arity$2(null,i__20962_20966);goog.dom.classes.remove(node_20967,class$);
{
var G__20968 = seq__20959_20963;
var G__20969 = chunk__20960_20964;
var G__20970 = count__20961_20965;
var G__20971 = (i__20962_20966 + 1);
seq__20959_20963 = G__20968;
chunk__20960_20964 = G__20969;
count__20961_20965 = G__20970;
i__20962_20966 = G__20971;
continue;
}
} else
{var temp__4092__auto___20972 = cljs.core.seq(seq__20959_20963);if(temp__4092__auto___20972)
{var seq__20959_20973__$1 = temp__4092__auto___20972;if(cljs.core.chunked_seq_QMARK_(seq__20959_20973__$1))
{var c__4148__auto___20974 = cljs.core.chunk_first(seq__20959_20973__$1);{
var G__20975 = cljs.core.chunk_rest(seq__20959_20973__$1);
var G__20976 = c__4148__auto___20974;
var G__20977 = cljs.core.count(c__4148__auto___20974);
var G__20978 = 0;
seq__20959_20963 = G__20975;
chunk__20960_20964 = G__20976;
count__20961_20965 = G__20977;
i__20962_20966 = G__20978;
continue;
}
} else
{var node_20979 = cljs.core.first(seq__20959_20973__$1);goog.dom.classes.remove(node_20979,class$);
{
var G__20980 = cljs.core.next(seq__20959_20973__$1);
var G__20981 = null;
var G__20982 = 0;
var G__20983 = 0;
seq__20959_20963 = G__20980;
chunk__20960_20964 = G__20981;
count__20961_20965 = G__20982;
i__20962_20966 = G__20983;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20988_20992 = cljs.core.seq(domina.nodes(content));var chunk__20989_20993 = null;var count__20990_20994 = 0;var i__20991_20995 = 0;while(true){
if((i__20991_20995 < count__20990_20994))
{var node_20996 = chunk__20989_20993.cljs$core$IIndexed$_nth$arity$2(null,i__20991_20995);goog.dom.classes.toggle(node_20996,class$);
{
var G__20997 = seq__20988_20992;
var G__20998 = chunk__20989_20993;
var G__20999 = count__20990_20994;
var G__21000 = (i__20991_20995 + 1);
seq__20988_20992 = G__20997;
chunk__20989_20993 = G__20998;
count__20990_20994 = G__20999;
i__20991_20995 = G__21000;
continue;
}
} else
{var temp__4092__auto___21001 = cljs.core.seq(seq__20988_20992);if(temp__4092__auto___21001)
{var seq__20988_21002__$1 = temp__4092__auto___21001;if(cljs.core.chunked_seq_QMARK_(seq__20988_21002__$1))
{var c__4148__auto___21003 = cljs.core.chunk_first(seq__20988_21002__$1);{
var G__21004 = cljs.core.chunk_rest(seq__20988_21002__$1);
var G__21005 = c__4148__auto___21003;
var G__21006 = cljs.core.count(c__4148__auto___21003);
var G__21007 = 0;
seq__20988_20992 = G__21004;
chunk__20989_20993 = G__21005;
count__20990_20994 = G__21006;
i__20991_20995 = G__21007;
continue;
}
} else
{var node_21008 = cljs.core.first(seq__20988_21002__$1);goog.dom.classes.toggle(node_21008,class$);
{
var G__21009 = cljs.core.next(seq__20988_21002__$1);
var G__21010 = null;
var G__21011 = 0;
var G__21012 = 0;
seq__20988_20992 = G__21009;
chunk__20989_20993 = G__21010;
count__20990_20994 = G__21011;
i__20991_20995 = G__21012;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_21021__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__21017_21022 = cljs.core.seq(domina.nodes(content));var chunk__21018_21023 = null;var count__21019_21024 = 0;var i__21020_21025 = 0;while(true){
if((i__21020_21025 < count__21019_21024))
{var node_21026 = chunk__21018_21023.cljs$core$IIndexed$_nth$arity$2(null,i__21020_21025);goog.dom.classes.set(node_21026,classes_21021__$1);
{
var G__21027 = seq__21017_21022;
var G__21028 = chunk__21018_21023;
var G__21029 = count__21019_21024;
var G__21030 = (i__21020_21025 + 1);
seq__21017_21022 = G__21027;
chunk__21018_21023 = G__21028;
count__21019_21024 = G__21029;
i__21020_21025 = G__21030;
continue;
}
} else
{var temp__4092__auto___21031 = cljs.core.seq(seq__21017_21022);if(temp__4092__auto___21031)
{var seq__21017_21032__$1 = temp__4092__auto___21031;if(cljs.core.chunked_seq_QMARK_(seq__21017_21032__$1))
{var c__4148__auto___21033 = cljs.core.chunk_first(seq__21017_21032__$1);{
var G__21034 = cljs.core.chunk_rest(seq__21017_21032__$1);
var G__21035 = c__4148__auto___21033;
var G__21036 = cljs.core.count(c__4148__auto___21033);
var G__21037 = 0;
seq__21017_21022 = G__21034;
chunk__21018_21023 = G__21035;
count__21019_21024 = G__21036;
i__21020_21025 = G__21037;
continue;
}
} else
{var node_21038 = cljs.core.first(seq__21017_21032__$1);goog.dom.classes.set(node_21038,classes_21021__$1);
{
var G__21039 = cljs.core.next(seq__21017_21032__$1);
var G__21040 = null;
var G__21041 = 0;
var G__21042 = 0;
seq__21017_21022 = G__21039;
chunk__21018_21023 = G__21040;
count__21019_21024 = G__21041;
i__21020_21025 = G__21042;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__21047_21051 = cljs.core.seq(domina.nodes(content));var chunk__21048_21052 = null;var count__21049_21053 = 0;var i__21050_21054 = 0;while(true){
if((i__21050_21054 < count__21049_21053))
{var node_21055 = chunk__21048_21052.cljs$core$IIndexed$_nth$arity$2(null,i__21050_21054);goog.dom.setTextContent(node_21055,value);
{
var G__21056 = seq__21047_21051;
var G__21057 = chunk__21048_21052;
var G__21058 = count__21049_21053;
var G__21059 = (i__21050_21054 + 1);
seq__21047_21051 = G__21056;
chunk__21048_21052 = G__21057;
count__21049_21053 = G__21058;
i__21050_21054 = G__21059;
continue;
}
} else
{var temp__4092__auto___21060 = cljs.core.seq(seq__21047_21051);if(temp__4092__auto___21060)
{var seq__21047_21061__$1 = temp__4092__auto___21060;if(cljs.core.chunked_seq_QMARK_(seq__21047_21061__$1))
{var c__4148__auto___21062 = cljs.core.chunk_first(seq__21047_21061__$1);{
var G__21063 = cljs.core.chunk_rest(seq__21047_21061__$1);
var G__21064 = c__4148__auto___21062;
var G__21065 = cljs.core.count(c__4148__auto___21062);
var G__21066 = 0;
seq__21047_21051 = G__21063;
chunk__21048_21052 = G__21064;
count__21049_21053 = G__21065;
i__21050_21054 = G__21066;
continue;
}
} else
{var node_21067 = cljs.core.first(seq__21047_21061__$1);goog.dom.setTextContent(node_21067,value);
{
var G__21068 = cljs.core.next(seq__21047_21061__$1);
var G__21069 = null;
var G__21070 = 0;
var G__21071 = 0;
seq__21047_21051 = G__21068;
chunk__21048_21052 = G__21069;
count__21049_21053 = G__21070;
i__21050_21054 = G__21071;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21076_21080 = cljs.core.seq(domina.nodes(content));var chunk__21077_21081 = null;var count__21078_21082 = 0;var i__21079_21083 = 0;while(true){
if((i__21079_21083 < count__21078_21082))
{var node_21084 = chunk__21077_21081.cljs$core$IIndexed$_nth$arity$2(null,i__21079_21083);goog.dom.forms.setValue(node_21084,value);
{
var G__21085 = seq__21076_21080;
var G__21086 = chunk__21077_21081;
var G__21087 = count__21078_21082;
var G__21088 = (i__21079_21083 + 1);
seq__21076_21080 = G__21085;
chunk__21077_21081 = G__21086;
count__21078_21082 = G__21087;
i__21079_21083 = G__21088;
continue;
}
} else
{var temp__4092__auto___21089 = cljs.core.seq(seq__21076_21080);if(temp__4092__auto___21089)
{var seq__21076_21090__$1 = temp__4092__auto___21089;if(cljs.core.chunked_seq_QMARK_(seq__21076_21090__$1))
{var c__4148__auto___21091 = cljs.core.chunk_first(seq__21076_21090__$1);{
var G__21092 = cljs.core.chunk_rest(seq__21076_21090__$1);
var G__21093 = c__4148__auto___21091;
var G__21094 = cljs.core.count(c__4148__auto___21091);
var G__21095 = 0;
seq__21076_21080 = G__21092;
chunk__21077_21081 = G__21093;
count__21078_21082 = G__21094;
i__21079_21083 = G__21095;
continue;
}
} else
{var node_21096 = cljs.core.first(seq__21076_21090__$1);goog.dom.forms.setValue(node_21096,value);
{
var G__21097 = cljs.core.next(seq__21076_21090__$1);
var G__21098 = null;
var G__21099 = 0;
var G__21100 = 0;
seq__21076_21080 = G__21097;
chunk__21077_21081 = G__21098;
count__21078_21082 = G__21099;
i__21079_21083 = G__21100;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_21111 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21107_21112 = cljs.core.seq(domina.nodes(content));var chunk__21108_21113 = null;var count__21109_21114 = 0;var i__21110_21115 = 0;while(true){
if((i__21110_21115 < count__21109_21114))
{var node_21116 = chunk__21108_21113.cljs$core$IIndexed$_nth$arity$2(null,i__21110_21115);node_21116.innerHTML = value_21111;
{
var G__21117 = seq__21107_21112;
var G__21118 = chunk__21108_21113;
var G__21119 = count__21109_21114;
var G__21120 = (i__21110_21115 + 1);
seq__21107_21112 = G__21117;
chunk__21108_21113 = G__21118;
count__21109_21114 = G__21119;
i__21110_21115 = G__21120;
continue;
}
} else
{var temp__4092__auto___21121 = cljs.core.seq(seq__21107_21112);if(temp__4092__auto___21121)
{var seq__21107_21122__$1 = temp__4092__auto___21121;if(cljs.core.chunked_seq_QMARK_(seq__21107_21122__$1))
{var c__4148__auto___21123 = cljs.core.chunk_first(seq__21107_21122__$1);{
var G__21124 = cljs.core.chunk_rest(seq__21107_21122__$1);
var G__21125 = c__4148__auto___21123;
var G__21126 = cljs.core.count(c__4148__auto___21123);
var G__21127 = 0;
seq__21107_21112 = G__21124;
chunk__21108_21113 = G__21125;
count__21109_21114 = G__21126;
i__21110_21115 = G__21127;
continue;
}
} else
{var node_21128 = cljs.core.first(seq__21107_21122__$1);node_21128.innerHTML = value_21111;
{
var G__21129 = cljs.core.next(seq__21107_21122__$1);
var G__21130 = null;
var G__21131 = 0;
var G__21132 = 0;
seq__21107_21112 = G__21129;
chunk__21108_21113 = G__21130;
count__21109_21114 = G__21131;
i__21110_21115 = G__21132;
continue;
}
}
} else
{}
}
break;
}
}catch (e21106){if((e21106 instanceof Error))
{var e_21133 = e21106;domina.replace_children_BANG_(content,value_21111);
} else
{if(cljs.core.constant$keyword$66)
{throw e21106;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21140_21144 = cljs.core.seq(children);var chunk__21141_21145 = null;var count__21142_21146 = 0;var i__21143_21147 = 0;while(true){
if((i__21143_21147 < count__21142_21146))
{var child_21148 = chunk__21141_21145.cljs$core$IIndexed$_nth$arity$2(null,i__21143_21147);frag.appendChild(child_21148);
{
var G__21149 = seq__21140_21144;
var G__21150 = chunk__21141_21145;
var G__21151 = count__21142_21146;
var G__21152 = (i__21143_21147 + 1);
seq__21140_21144 = G__21149;
chunk__21141_21145 = G__21150;
count__21142_21146 = G__21151;
i__21143_21147 = G__21152;
continue;
}
} else
{var temp__4092__auto___21153 = cljs.core.seq(seq__21140_21144);if(temp__4092__auto___21153)
{var seq__21140_21154__$1 = temp__4092__auto___21153;if(cljs.core.chunked_seq_QMARK_(seq__21140_21154__$1))
{var c__4148__auto___21155 = cljs.core.chunk_first(seq__21140_21154__$1);{
var G__21156 = cljs.core.chunk_rest(seq__21140_21154__$1);
var G__21157 = c__4148__auto___21155;
var G__21158 = cljs.core.count(c__4148__auto___21155);
var G__21159 = 0;
seq__21140_21144 = G__21156;
chunk__21141_21145 = G__21157;
count__21142_21146 = G__21158;
i__21143_21147 = G__21159;
continue;
}
} else
{var child_21160 = cljs.core.first(seq__21140_21154__$1);frag.appendChild(child_21160);
{
var G__21161 = cljs.core.next(seq__21140_21154__$1);
var G__21162 = null;
var G__21163 = 0;
var G__21164 = 0;
seq__21140_21144 = G__21161;
chunk__21141_21145 = G__21162;
count__21142_21146 = G__21163;
i__21143_21147 = G__21164;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__21134_SHARP_,p2__21135_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__21134_SHARP_,p2__21135_SHARP_) : f.call(null,p1__21134_SHARP_,p2__21135_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__21166 = list_thing;if(G__21166)
{var bit__4050__auto__ = (G__21166.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__21166.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21166.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21166);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21166);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$67)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__21167 = content;if(G__21167)
{var bit__4050__auto__ = (G__21167.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__21167.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21167.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21167);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21167);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$67)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__21168 = content;if(G__21168)
{var bit__4050__auto__ = (G__21168.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__21168.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__21168);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$67)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
