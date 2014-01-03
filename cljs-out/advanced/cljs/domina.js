// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_19873 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19875 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19874,table_section_wrapper_19874,opt_wrapper_19873,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19875,table_section_wrapper_19874,cell_wrapper_19875,opt_wrapper_19873,table_section_wrapper_19874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19874]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19880 = cljs.core.seq(tbody);var chunk__19881 = null;var count__19882 = 0;var i__19883 = 0;while(true){
if((i__19883 < count__19882))
{var child = chunk__19881.cljs$core$IIndexed$_nth$arity$2(null,i__19883);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19884 = seq__19880;
var G__19885 = chunk__19881;
var G__19886 = count__19882;
var G__19887 = (i__19883 + 1);
seq__19880 = G__19884;
chunk__19881 = G__19885;
count__19882 = G__19886;
i__19883 = G__19887;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19880);if(temp__4092__auto__)
{var seq__19880__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19880__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__19880__$1);{
var G__19888 = cljs.core.chunk_rest(seq__19880__$1);
var G__19889 = c__4015__auto__;
var G__19890 = cljs.core.count(c__4015__auto__);
var G__19891 = 0;
seq__19880 = G__19888;
chunk__19881 = G__19889;
count__19882 = G__19890;
i__19883 = G__19891;
continue;
}
} else
{var child = cljs.core.first(seq__19880__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19892 = cljs.core.next(seq__19880__$1);
var G__19893 = null;
var G__19894 = 0;
var G__19895 = 0;
seq__19880 = G__19892;
chunk__19881 = G__19893;
count__19882 = G__19894;
i__19883 = G__19895;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19897 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19898 = wrapper.lastChild;
var G__19899 = (level - 1);
wrapper = G__19898;
level = G__19899;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj19901 = {};return obj19901;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19902){
var mesg = cljs.core.seq(arglist__19902);
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
log.cljs$lang$applyTo = (function (arglist__19903){
var mesg = cljs.core.seq(arglist__19903);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19904){
var contents = cljs.core.seq(arglist__19904);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19905_SHARP_){return p1__19905_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19906_SHARP_,p2__19907_SHARP_){return goog.dom.insertChildAt(p1__19906_SHARP_,p2__19907_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__19906_SHARP_,p2__19907_SHARP_){return goog.dom.insertChildAt(p1__19906_SHARP_,p2__19907_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19909_SHARP_,p2__19908_SHARP_){return goog.dom.insertSiblingBefore(p2__19908_SHARP_,p1__19909_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19909_SHARP_,p2__19908_SHARP_){return goog.dom.insertSiblingBefore(p2__19908_SHARP_,p1__19909_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19911_SHARP_,p2__19910_SHARP_){return goog.dom.insertSiblingAfter(p2__19910_SHARP_,p1__19911_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19911_SHARP_,p2__19910_SHARP_){return goog.dom.insertSiblingAfter(p2__19910_SHARP_,p1__19911_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19913_SHARP_,p2__19912_SHARP_){return goog.dom.replaceNode(p2__19912_SHARP_,p1__19913_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19913_SHARP_,p2__19912_SHARP_){return goog.dom.replaceNode(p2__19912_SHARP_,p1__19913_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19918_19922 = cljs.core.seq(domina.nodes(content));var chunk__19919_19923 = null;var count__19920_19924 = 0;var i__19921_19925 = 0;while(true){
if((i__19921_19925 < count__19920_19924))
{var n_19926 = chunk__19919_19923.cljs$core$IIndexed$_nth$arity$2(null,i__19921_19925);goog.style.setStyle(n_19926,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19927 = seq__19918_19922;
var G__19928 = chunk__19919_19923;
var G__19929 = count__19920_19924;
var G__19930 = (i__19921_19925 + 1);
seq__19918_19922 = G__19927;
chunk__19919_19923 = G__19928;
count__19920_19924 = G__19929;
i__19921_19925 = G__19930;
continue;
}
} else
{var temp__4092__auto___19931 = cljs.core.seq(seq__19918_19922);if(temp__4092__auto___19931)
{var seq__19918_19932__$1 = temp__4092__auto___19931;if(cljs.core.chunked_seq_QMARK_(seq__19918_19932__$1))
{var c__4015__auto___19933 = cljs.core.chunk_first(seq__19918_19932__$1);{
var G__19934 = cljs.core.chunk_rest(seq__19918_19932__$1);
var G__19935 = c__4015__auto___19933;
var G__19936 = cljs.core.count(c__4015__auto___19933);
var G__19937 = 0;
seq__19918_19922 = G__19934;
chunk__19919_19923 = G__19935;
count__19920_19924 = G__19936;
i__19921_19925 = G__19937;
continue;
}
} else
{var n_19938 = cljs.core.first(seq__19918_19932__$1);goog.style.setStyle(n_19938,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19939 = cljs.core.next(seq__19918_19932__$1);
var G__19940 = null;
var G__19941 = 0;
var G__19942 = 0;
seq__19918_19922 = G__19939;
chunk__19919_19923 = G__19940;
count__19920_19924 = G__19941;
i__19921_19925 = G__19942;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19943){
var content = cljs.core.first(arglist__19943);
arglist__19943 = cljs.core.next(arglist__19943);
var name = cljs.core.first(arglist__19943);
var value = cljs.core.rest(arglist__19943);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19948_19952 = cljs.core.seq(domina.nodes(content));var chunk__19949_19953 = null;var count__19950_19954 = 0;var i__19951_19955 = 0;while(true){
if((i__19951_19955 < count__19950_19954))
{var n_19956 = chunk__19949_19953.cljs$core$IIndexed$_nth$arity$2(null,i__19951_19955);n_19956.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19957 = seq__19948_19952;
var G__19958 = chunk__19949_19953;
var G__19959 = count__19950_19954;
var G__19960 = (i__19951_19955 + 1);
seq__19948_19952 = G__19957;
chunk__19949_19953 = G__19958;
count__19950_19954 = G__19959;
i__19951_19955 = G__19960;
continue;
}
} else
{var temp__4092__auto___19961 = cljs.core.seq(seq__19948_19952);if(temp__4092__auto___19961)
{var seq__19948_19962__$1 = temp__4092__auto___19961;if(cljs.core.chunked_seq_QMARK_(seq__19948_19962__$1))
{var c__4015__auto___19963 = cljs.core.chunk_first(seq__19948_19962__$1);{
var G__19964 = cljs.core.chunk_rest(seq__19948_19962__$1);
var G__19965 = c__4015__auto___19963;
var G__19966 = cljs.core.count(c__4015__auto___19963);
var G__19967 = 0;
seq__19948_19952 = G__19964;
chunk__19949_19953 = G__19965;
count__19950_19954 = G__19966;
i__19951_19955 = G__19967;
continue;
}
} else
{var n_19968 = cljs.core.first(seq__19948_19962__$1);n_19968.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19969 = cljs.core.next(seq__19948_19962__$1);
var G__19970 = null;
var G__19971 = 0;
var G__19972 = 0;
seq__19948_19952 = G__19969;
chunk__19949_19953 = G__19970;
count__19950_19954 = G__19971;
i__19951_19955 = G__19972;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19973){
var content = cljs.core.first(arglist__19973);
arglist__19973 = cljs.core.next(arglist__19973);
var name = cljs.core.first(arglist__19973);
var value = cljs.core.rest(arglist__19973);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19978_19982 = cljs.core.seq(domina.nodes(content));var chunk__19979_19983 = null;var count__19980_19984 = 0;var i__19981_19985 = 0;while(true){
if((i__19981_19985 < count__19980_19984))
{var n_19986 = chunk__19979_19983.cljs$core$IIndexed$_nth$arity$2(null,i__19981_19985);n_19986.removeAttribute(cljs.core.name(name));
{
var G__19987 = seq__19978_19982;
var G__19988 = chunk__19979_19983;
var G__19989 = count__19980_19984;
var G__19990 = (i__19981_19985 + 1);
seq__19978_19982 = G__19987;
chunk__19979_19983 = G__19988;
count__19980_19984 = G__19989;
i__19981_19985 = G__19990;
continue;
}
} else
{var temp__4092__auto___19991 = cljs.core.seq(seq__19978_19982);if(temp__4092__auto___19991)
{var seq__19978_19992__$1 = temp__4092__auto___19991;if(cljs.core.chunked_seq_QMARK_(seq__19978_19992__$1))
{var c__4015__auto___19993 = cljs.core.chunk_first(seq__19978_19992__$1);{
var G__19994 = cljs.core.chunk_rest(seq__19978_19992__$1);
var G__19995 = c__4015__auto___19993;
var G__19996 = cljs.core.count(c__4015__auto___19993);
var G__19997 = 0;
seq__19978_19982 = G__19994;
chunk__19979_19983 = G__19995;
count__19980_19984 = G__19996;
i__19981_19985 = G__19997;
continue;
}
} else
{var n_19998 = cljs.core.first(seq__19978_19992__$1);n_19998.removeAttribute(cljs.core.name(name));
{
var G__19999 = cljs.core.next(seq__19978_19992__$1);
var G__20000 = null;
var G__20001 = 0;
var G__20002 = 0;
seq__19978_19982 = G__19999;
chunk__19979_19983 = G__20000;
count__19980_19984 = G__20001;
i__19981_19985 = G__20002;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__20004 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20004,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20004,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
{if(cljs.core.constant$keyword$6)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20005_SHARP_){var attr = attrs__$1.item(p1__20005_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20012_20018 = cljs.core.seq(styles);var chunk__20013_20019 = null;var count__20014_20020 = 0;var i__20015_20021 = 0;while(true){
if((i__20015_20021 < count__20014_20020))
{var vec__20016_20022 = chunk__20013_20019.cljs$core$IIndexed$_nth$arity$2(null,i__20015_20021);var name_20023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20016_20022,0,null);var value_20024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20016_20022,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20023,cljs.core.array_seq([value_20024], 0));
{
var G__20025 = seq__20012_20018;
var G__20026 = chunk__20013_20019;
var G__20027 = count__20014_20020;
var G__20028 = (i__20015_20021 + 1);
seq__20012_20018 = G__20025;
chunk__20013_20019 = G__20026;
count__20014_20020 = G__20027;
i__20015_20021 = G__20028;
continue;
}
} else
{var temp__4092__auto___20029 = cljs.core.seq(seq__20012_20018);if(temp__4092__auto___20029)
{var seq__20012_20030__$1 = temp__4092__auto___20029;if(cljs.core.chunked_seq_QMARK_(seq__20012_20030__$1))
{var c__4015__auto___20031 = cljs.core.chunk_first(seq__20012_20030__$1);{
var G__20032 = cljs.core.chunk_rest(seq__20012_20030__$1);
var G__20033 = c__4015__auto___20031;
var G__20034 = cljs.core.count(c__4015__auto___20031);
var G__20035 = 0;
seq__20012_20018 = G__20032;
chunk__20013_20019 = G__20033;
count__20014_20020 = G__20034;
i__20015_20021 = G__20035;
continue;
}
} else
{var vec__20017_20036 = cljs.core.first(seq__20012_20030__$1);var name_20037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017_20036,0,null);var value_20038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017_20036,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20037,cljs.core.array_seq([value_20038], 0));
{
var G__20039 = cljs.core.next(seq__20012_20030__$1);
var G__20040 = null;
var G__20041 = 0;
var G__20042 = 0;
seq__20012_20018 = G__20039;
chunk__20013_20019 = G__20040;
count__20014_20020 = G__20041;
i__20015_20021 = G__20042;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20049_20055 = cljs.core.seq(attrs);var chunk__20050_20056 = null;var count__20051_20057 = 0;var i__20052_20058 = 0;while(true){
if((i__20052_20058 < count__20051_20057))
{var vec__20053_20059 = chunk__20050_20056.cljs$core$IIndexed$_nth$arity$2(null,i__20052_20058);var name_20060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053_20059,0,null);var value_20061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053_20059,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20060,cljs.core.array_seq([value_20061], 0));
{
var G__20062 = seq__20049_20055;
var G__20063 = chunk__20050_20056;
var G__20064 = count__20051_20057;
var G__20065 = (i__20052_20058 + 1);
seq__20049_20055 = G__20062;
chunk__20050_20056 = G__20063;
count__20051_20057 = G__20064;
i__20052_20058 = G__20065;
continue;
}
} else
{var temp__4092__auto___20066 = cljs.core.seq(seq__20049_20055);if(temp__4092__auto___20066)
{var seq__20049_20067__$1 = temp__4092__auto___20066;if(cljs.core.chunked_seq_QMARK_(seq__20049_20067__$1))
{var c__4015__auto___20068 = cljs.core.chunk_first(seq__20049_20067__$1);{
var G__20069 = cljs.core.chunk_rest(seq__20049_20067__$1);
var G__20070 = c__4015__auto___20068;
var G__20071 = cljs.core.count(c__4015__auto___20068);
var G__20072 = 0;
seq__20049_20055 = G__20069;
chunk__20050_20056 = G__20070;
count__20051_20057 = G__20071;
i__20052_20058 = G__20072;
continue;
}
} else
{var vec__20054_20073 = cljs.core.first(seq__20049_20067__$1);var name_20074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054_20073,0,null);var value_20075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054_20073,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_20074,cljs.core.array_seq([value_20075], 0));
{
var G__20076 = cljs.core.next(seq__20049_20067__$1);
var G__20077 = null;
var G__20078 = 0;
var G__20079 = 0;
seq__20049_20055 = G__20076;
chunk__20050_20056 = G__20077;
count__20051_20057 = G__20078;
i__20052_20058 = G__20079;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20084_20088 = cljs.core.seq(domina.nodes(content));var chunk__20085_20089 = null;var count__20086_20090 = 0;var i__20087_20091 = 0;while(true){
if((i__20087_20091 < count__20086_20090))
{var node_20092 = chunk__20085_20089.cljs$core$IIndexed$_nth$arity$2(null,i__20087_20091);goog.dom.classes.add(node_20092,class$);
{
var G__20093 = seq__20084_20088;
var G__20094 = chunk__20085_20089;
var G__20095 = count__20086_20090;
var G__20096 = (i__20087_20091 + 1);
seq__20084_20088 = G__20093;
chunk__20085_20089 = G__20094;
count__20086_20090 = G__20095;
i__20087_20091 = G__20096;
continue;
}
} else
{var temp__4092__auto___20097 = cljs.core.seq(seq__20084_20088);if(temp__4092__auto___20097)
{var seq__20084_20098__$1 = temp__4092__auto___20097;if(cljs.core.chunked_seq_QMARK_(seq__20084_20098__$1))
{var c__4015__auto___20099 = cljs.core.chunk_first(seq__20084_20098__$1);{
var G__20100 = cljs.core.chunk_rest(seq__20084_20098__$1);
var G__20101 = c__4015__auto___20099;
var G__20102 = cljs.core.count(c__4015__auto___20099);
var G__20103 = 0;
seq__20084_20088 = G__20100;
chunk__20085_20089 = G__20101;
count__20086_20090 = G__20102;
i__20087_20091 = G__20103;
continue;
}
} else
{var node_20104 = cljs.core.first(seq__20084_20098__$1);goog.dom.classes.add(node_20104,class$);
{
var G__20105 = cljs.core.next(seq__20084_20098__$1);
var G__20106 = null;
var G__20107 = 0;
var G__20108 = 0;
seq__20084_20088 = G__20105;
chunk__20085_20089 = G__20106;
count__20086_20090 = G__20107;
i__20087_20091 = G__20108;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20113_20117 = cljs.core.seq(domina.nodes(content));var chunk__20114_20118 = null;var count__20115_20119 = 0;var i__20116_20120 = 0;while(true){
if((i__20116_20120 < count__20115_20119))
{var node_20121 = chunk__20114_20118.cljs$core$IIndexed$_nth$arity$2(null,i__20116_20120);goog.dom.classes.remove(node_20121,class$);
{
var G__20122 = seq__20113_20117;
var G__20123 = chunk__20114_20118;
var G__20124 = count__20115_20119;
var G__20125 = (i__20116_20120 + 1);
seq__20113_20117 = G__20122;
chunk__20114_20118 = G__20123;
count__20115_20119 = G__20124;
i__20116_20120 = G__20125;
continue;
}
} else
{var temp__4092__auto___20126 = cljs.core.seq(seq__20113_20117);if(temp__4092__auto___20126)
{var seq__20113_20127__$1 = temp__4092__auto___20126;if(cljs.core.chunked_seq_QMARK_(seq__20113_20127__$1))
{var c__4015__auto___20128 = cljs.core.chunk_first(seq__20113_20127__$1);{
var G__20129 = cljs.core.chunk_rest(seq__20113_20127__$1);
var G__20130 = c__4015__auto___20128;
var G__20131 = cljs.core.count(c__4015__auto___20128);
var G__20132 = 0;
seq__20113_20117 = G__20129;
chunk__20114_20118 = G__20130;
count__20115_20119 = G__20131;
i__20116_20120 = G__20132;
continue;
}
} else
{var node_20133 = cljs.core.first(seq__20113_20127__$1);goog.dom.classes.remove(node_20133,class$);
{
var G__20134 = cljs.core.next(seq__20113_20127__$1);
var G__20135 = null;
var G__20136 = 0;
var G__20137 = 0;
seq__20113_20117 = G__20134;
chunk__20114_20118 = G__20135;
count__20115_20119 = G__20136;
i__20116_20120 = G__20137;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20142_20146 = cljs.core.seq(domina.nodes(content));var chunk__20143_20147 = null;var count__20144_20148 = 0;var i__20145_20149 = 0;while(true){
if((i__20145_20149 < count__20144_20148))
{var node_20150 = chunk__20143_20147.cljs$core$IIndexed$_nth$arity$2(null,i__20145_20149);goog.dom.classes.toggle(node_20150,class$);
{
var G__20151 = seq__20142_20146;
var G__20152 = chunk__20143_20147;
var G__20153 = count__20144_20148;
var G__20154 = (i__20145_20149 + 1);
seq__20142_20146 = G__20151;
chunk__20143_20147 = G__20152;
count__20144_20148 = G__20153;
i__20145_20149 = G__20154;
continue;
}
} else
{var temp__4092__auto___20155 = cljs.core.seq(seq__20142_20146);if(temp__4092__auto___20155)
{var seq__20142_20156__$1 = temp__4092__auto___20155;if(cljs.core.chunked_seq_QMARK_(seq__20142_20156__$1))
{var c__4015__auto___20157 = cljs.core.chunk_first(seq__20142_20156__$1);{
var G__20158 = cljs.core.chunk_rest(seq__20142_20156__$1);
var G__20159 = c__4015__auto___20157;
var G__20160 = cljs.core.count(c__4015__auto___20157);
var G__20161 = 0;
seq__20142_20146 = G__20158;
chunk__20143_20147 = G__20159;
count__20144_20148 = G__20160;
i__20145_20149 = G__20161;
continue;
}
} else
{var node_20162 = cljs.core.first(seq__20142_20156__$1);goog.dom.classes.toggle(node_20162,class$);
{
var G__20163 = cljs.core.next(seq__20142_20156__$1);
var G__20164 = null;
var G__20165 = 0;
var G__20166 = 0;
seq__20142_20146 = G__20163;
chunk__20143_20147 = G__20164;
count__20144_20148 = G__20165;
i__20145_20149 = G__20166;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20175__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__20171_20176 = cljs.core.seq(domina.nodes(content));var chunk__20172_20177 = null;var count__20173_20178 = 0;var i__20174_20179 = 0;while(true){
if((i__20174_20179 < count__20173_20178))
{var node_20180 = chunk__20172_20177.cljs$core$IIndexed$_nth$arity$2(null,i__20174_20179);goog.dom.classes.set(node_20180,classes_20175__$1);
{
var G__20181 = seq__20171_20176;
var G__20182 = chunk__20172_20177;
var G__20183 = count__20173_20178;
var G__20184 = (i__20174_20179 + 1);
seq__20171_20176 = G__20181;
chunk__20172_20177 = G__20182;
count__20173_20178 = G__20183;
i__20174_20179 = G__20184;
continue;
}
} else
{var temp__4092__auto___20185 = cljs.core.seq(seq__20171_20176);if(temp__4092__auto___20185)
{var seq__20171_20186__$1 = temp__4092__auto___20185;if(cljs.core.chunked_seq_QMARK_(seq__20171_20186__$1))
{var c__4015__auto___20187 = cljs.core.chunk_first(seq__20171_20186__$1);{
var G__20188 = cljs.core.chunk_rest(seq__20171_20186__$1);
var G__20189 = c__4015__auto___20187;
var G__20190 = cljs.core.count(c__4015__auto___20187);
var G__20191 = 0;
seq__20171_20176 = G__20188;
chunk__20172_20177 = G__20189;
count__20173_20178 = G__20190;
i__20174_20179 = G__20191;
continue;
}
} else
{var node_20192 = cljs.core.first(seq__20171_20186__$1);goog.dom.classes.set(node_20192,classes_20175__$1);
{
var G__20193 = cljs.core.next(seq__20171_20186__$1);
var G__20194 = null;
var G__20195 = 0;
var G__20196 = 0;
seq__20171_20176 = G__20193;
chunk__20172_20177 = G__20194;
count__20173_20178 = G__20195;
i__20174_20179 = G__20196;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20201_20205 = cljs.core.seq(domina.nodes(content));var chunk__20202_20206 = null;var count__20203_20207 = 0;var i__20204_20208 = 0;while(true){
if((i__20204_20208 < count__20203_20207))
{var node_20209 = chunk__20202_20206.cljs$core$IIndexed$_nth$arity$2(null,i__20204_20208);goog.dom.setTextContent(node_20209,value);
{
var G__20210 = seq__20201_20205;
var G__20211 = chunk__20202_20206;
var G__20212 = count__20203_20207;
var G__20213 = (i__20204_20208 + 1);
seq__20201_20205 = G__20210;
chunk__20202_20206 = G__20211;
count__20203_20207 = G__20212;
i__20204_20208 = G__20213;
continue;
}
} else
{var temp__4092__auto___20214 = cljs.core.seq(seq__20201_20205);if(temp__4092__auto___20214)
{var seq__20201_20215__$1 = temp__4092__auto___20214;if(cljs.core.chunked_seq_QMARK_(seq__20201_20215__$1))
{var c__4015__auto___20216 = cljs.core.chunk_first(seq__20201_20215__$1);{
var G__20217 = cljs.core.chunk_rest(seq__20201_20215__$1);
var G__20218 = c__4015__auto___20216;
var G__20219 = cljs.core.count(c__4015__auto___20216);
var G__20220 = 0;
seq__20201_20205 = G__20217;
chunk__20202_20206 = G__20218;
count__20203_20207 = G__20219;
i__20204_20208 = G__20220;
continue;
}
} else
{var node_20221 = cljs.core.first(seq__20201_20215__$1);goog.dom.setTextContent(node_20221,value);
{
var G__20222 = cljs.core.next(seq__20201_20215__$1);
var G__20223 = null;
var G__20224 = 0;
var G__20225 = 0;
seq__20201_20205 = G__20222;
chunk__20202_20206 = G__20223;
count__20203_20207 = G__20224;
i__20204_20208 = G__20225;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20230_20234 = cljs.core.seq(domina.nodes(content));var chunk__20231_20235 = null;var count__20232_20236 = 0;var i__20233_20237 = 0;while(true){
if((i__20233_20237 < count__20232_20236))
{var node_20238 = chunk__20231_20235.cljs$core$IIndexed$_nth$arity$2(null,i__20233_20237);goog.dom.forms.setValue(node_20238,value);
{
var G__20239 = seq__20230_20234;
var G__20240 = chunk__20231_20235;
var G__20241 = count__20232_20236;
var G__20242 = (i__20233_20237 + 1);
seq__20230_20234 = G__20239;
chunk__20231_20235 = G__20240;
count__20232_20236 = G__20241;
i__20233_20237 = G__20242;
continue;
}
} else
{var temp__4092__auto___20243 = cljs.core.seq(seq__20230_20234);if(temp__4092__auto___20243)
{var seq__20230_20244__$1 = temp__4092__auto___20243;if(cljs.core.chunked_seq_QMARK_(seq__20230_20244__$1))
{var c__4015__auto___20245 = cljs.core.chunk_first(seq__20230_20244__$1);{
var G__20246 = cljs.core.chunk_rest(seq__20230_20244__$1);
var G__20247 = c__4015__auto___20245;
var G__20248 = cljs.core.count(c__4015__auto___20245);
var G__20249 = 0;
seq__20230_20234 = G__20246;
chunk__20231_20235 = G__20247;
count__20232_20236 = G__20248;
i__20233_20237 = G__20249;
continue;
}
} else
{var node_20250 = cljs.core.first(seq__20230_20244__$1);goog.dom.forms.setValue(node_20250,value);
{
var G__20251 = cljs.core.next(seq__20230_20244__$1);
var G__20252 = null;
var G__20253 = 0;
var G__20254 = 0;
seq__20230_20234 = G__20251;
chunk__20231_20235 = G__20252;
count__20232_20236 = G__20253;
i__20233_20237 = G__20254;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_20265 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20261_20266 = cljs.core.seq(domina.nodes(content));var chunk__20262_20267 = null;var count__20263_20268 = 0;var i__20264_20269 = 0;while(true){
if((i__20264_20269 < count__20263_20268))
{var node_20270 = chunk__20262_20267.cljs$core$IIndexed$_nth$arity$2(null,i__20264_20269);node_20270.innerHTML = value_20265;
{
var G__20271 = seq__20261_20266;
var G__20272 = chunk__20262_20267;
var G__20273 = count__20263_20268;
var G__20274 = (i__20264_20269 + 1);
seq__20261_20266 = G__20271;
chunk__20262_20267 = G__20272;
count__20263_20268 = G__20273;
i__20264_20269 = G__20274;
continue;
}
} else
{var temp__4092__auto___20275 = cljs.core.seq(seq__20261_20266);if(temp__4092__auto___20275)
{var seq__20261_20276__$1 = temp__4092__auto___20275;if(cljs.core.chunked_seq_QMARK_(seq__20261_20276__$1))
{var c__4015__auto___20277 = cljs.core.chunk_first(seq__20261_20276__$1);{
var G__20278 = cljs.core.chunk_rest(seq__20261_20276__$1);
var G__20279 = c__4015__auto___20277;
var G__20280 = cljs.core.count(c__4015__auto___20277);
var G__20281 = 0;
seq__20261_20266 = G__20278;
chunk__20262_20267 = G__20279;
count__20263_20268 = G__20280;
i__20264_20269 = G__20281;
continue;
}
} else
{var node_20282 = cljs.core.first(seq__20261_20276__$1);node_20282.innerHTML = value_20265;
{
var G__20283 = cljs.core.next(seq__20261_20276__$1);
var G__20284 = null;
var G__20285 = 0;
var G__20286 = 0;
seq__20261_20266 = G__20283;
chunk__20262_20267 = G__20284;
count__20263_20268 = G__20285;
i__20264_20269 = G__20286;
continue;
}
}
} else
{}
}
break;
}
}catch (e20260){if((e20260 instanceof Error))
{var e_20287 = e20260;domina.replace_children_BANG_(content,value_20265);
} else
{if(cljs.core.constant$keyword$6)
{throw e20260;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20294_20298 = cljs.core.seq(children);var chunk__20295_20299 = null;var count__20296_20300 = 0;var i__20297_20301 = 0;while(true){
if((i__20297_20301 < count__20296_20300))
{var child_20302 = chunk__20295_20299.cljs$core$IIndexed$_nth$arity$2(null,i__20297_20301);frag.appendChild(child_20302);
{
var G__20303 = seq__20294_20298;
var G__20304 = chunk__20295_20299;
var G__20305 = count__20296_20300;
var G__20306 = (i__20297_20301 + 1);
seq__20294_20298 = G__20303;
chunk__20295_20299 = G__20304;
count__20296_20300 = G__20305;
i__20297_20301 = G__20306;
continue;
}
} else
{var temp__4092__auto___20307 = cljs.core.seq(seq__20294_20298);if(temp__4092__auto___20307)
{var seq__20294_20308__$1 = temp__4092__auto___20307;if(cljs.core.chunked_seq_QMARK_(seq__20294_20308__$1))
{var c__4015__auto___20309 = cljs.core.chunk_first(seq__20294_20308__$1);{
var G__20310 = cljs.core.chunk_rest(seq__20294_20308__$1);
var G__20311 = c__4015__auto___20309;
var G__20312 = cljs.core.count(c__4015__auto___20309);
var G__20313 = 0;
seq__20294_20298 = G__20310;
chunk__20295_20299 = G__20311;
count__20296_20300 = G__20312;
i__20297_20301 = G__20313;
continue;
}
} else
{var child_20314 = cljs.core.first(seq__20294_20308__$1);frag.appendChild(child_20314);
{
var G__20315 = cljs.core.next(seq__20294_20308__$1);
var G__20316 = null;
var G__20317 = 0;
var G__20318 = 0;
seq__20294_20298 = G__20315;
chunk__20295_20299 = G__20316;
count__20296_20300 = G__20317;
i__20297_20301 = G__20318;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__20288_SHARP_,p2__20289_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__20288_SHARP_,p2__20289_SHARP_) : f.call(null,p1__20288_SHARP_,p2__20289_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not(obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__20320 = list_thing;if(G__20320)
{var bit__3917__auto__ = (G__20320.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__20320.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20320.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20320);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20320);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__20321 = content;if(G__20321)
{var bit__3917__auto__ = (G__20321.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__20321.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20321.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20321);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20321);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$7)
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
{if((function (){var G__20322 = content;if(G__20322)
{var bit__3917__auto__ = (G__20322.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__20322.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20322.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20322);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__20322);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$7)
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
