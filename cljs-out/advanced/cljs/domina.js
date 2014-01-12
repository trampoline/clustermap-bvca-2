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
var opt_wrapper_23996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23997 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$113,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_23997,table_section_wrapper_23997,opt_wrapper_23996,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_23998,table_section_wrapper_23997,cell_wrapper_23998,opt_wrapper_23996,table_section_wrapper_23997,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_23997]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24003 = cljs.core.seq(tbody);var chunk__24004 = null;var count__24005 = 0;var i__24006 = 0;while(true){
if((i__24006 < count__24005))
{var child = chunk__24004.cljs$core$IIndexed$_nth$arity$2(null,i__24006);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24007 = seq__24003;
var G__24008 = chunk__24004;
var G__24009 = count__24005;
var G__24010 = (i__24006 + 1);
seq__24003 = G__24007;
chunk__24004 = G__24008;
count__24005 = G__24009;
i__24006 = G__24010;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24003);if(temp__4092__auto__)
{var seq__24003__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24003__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24003__$1);{
var G__24011 = cljs.core.chunk_rest(seq__24003__$1);
var G__24012 = c__4148__auto__;
var G__24013 = cljs.core.count(c__4148__auto__);
var G__24014 = 0;
seq__24003 = G__24011;
chunk__24004 = G__24012;
count__24005 = G__24013;
i__24006 = G__24014;
continue;
}
} else
{var child = cljs.core.first(seq__24003__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24015 = cljs.core.next(seq__24003__$1);
var G__24016 = null;
var G__24017 = 0;
var G__24018 = 0;
seq__24003 = G__24015;
chunk__24004 = G__24016;
count__24005 = G__24017;
i__24006 = G__24018;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__24020 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24020,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__24021 = wrapper.lastChild;
var G__24022 = (level - 1);
wrapper = G__24021;
level = G__24022;
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
domina.DomContent = (function (){var obj24024 = {};return obj24024;
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
log_debug.cljs$lang$applyTo = (function (arglist__24025){
var mesg = cljs.core.seq(arglist__24025);
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
log.cljs$lang$applyTo = (function (arglist__24026){
var mesg = cljs.core.seq(arglist__24026);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24027){
var contents = cljs.core.seq(arglist__24027);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24028_SHARP_){return p1__24028_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24029_SHARP_,p2__24030_SHARP_){return goog.dom.insertChildAt(p1__24029_SHARP_,p2__24030_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__24029_SHARP_,p2__24030_SHARP_){return goog.dom.insertChildAt(p1__24029_SHARP_,p2__24030_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24032_SHARP_,p2__24031_SHARP_){return goog.dom.insertSiblingBefore(p2__24031_SHARP_,p1__24032_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24032_SHARP_,p2__24031_SHARP_){return goog.dom.insertSiblingBefore(p2__24031_SHARP_,p1__24032_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24034_SHARP_,p2__24033_SHARP_){return goog.dom.insertSiblingAfter(p2__24033_SHARP_,p1__24034_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24034_SHARP_,p2__24033_SHARP_){return goog.dom.insertSiblingAfter(p2__24033_SHARP_,p1__24034_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24036_SHARP_,p2__24035_SHARP_){return goog.dom.replaceNode(p2__24035_SHARP_,p1__24036_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24036_SHARP_,p2__24035_SHARP_){return goog.dom.replaceNode(p2__24035_SHARP_,p1__24036_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24041_24045 = cljs.core.seq(domina.nodes(content));var chunk__24042_24046 = null;var count__24043_24047 = 0;var i__24044_24048 = 0;while(true){
if((i__24044_24048 < count__24043_24047))
{var n_24049 = chunk__24042_24046.cljs$core$IIndexed$_nth$arity$2(null,i__24044_24048);goog.style.setStyle(n_24049,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24050 = seq__24041_24045;
var G__24051 = chunk__24042_24046;
var G__24052 = count__24043_24047;
var G__24053 = (i__24044_24048 + 1);
seq__24041_24045 = G__24050;
chunk__24042_24046 = G__24051;
count__24043_24047 = G__24052;
i__24044_24048 = G__24053;
continue;
}
} else
{var temp__4092__auto___24054 = cljs.core.seq(seq__24041_24045);if(temp__4092__auto___24054)
{var seq__24041_24055__$1 = temp__4092__auto___24054;if(cljs.core.chunked_seq_QMARK_(seq__24041_24055__$1))
{var c__4148__auto___24056 = cljs.core.chunk_first(seq__24041_24055__$1);{
var G__24057 = cljs.core.chunk_rest(seq__24041_24055__$1);
var G__24058 = c__4148__auto___24056;
var G__24059 = cljs.core.count(c__4148__auto___24056);
var G__24060 = 0;
seq__24041_24045 = G__24057;
chunk__24042_24046 = G__24058;
count__24043_24047 = G__24059;
i__24044_24048 = G__24060;
continue;
}
} else
{var n_24061 = cljs.core.first(seq__24041_24055__$1);goog.style.setStyle(n_24061,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24062 = cljs.core.next(seq__24041_24055__$1);
var G__24063 = null;
var G__24064 = 0;
var G__24065 = 0;
seq__24041_24045 = G__24062;
chunk__24042_24046 = G__24063;
count__24043_24047 = G__24064;
i__24044_24048 = G__24065;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24066){
var content = cljs.core.first(arglist__24066);
arglist__24066 = cljs.core.next(arglist__24066);
var name = cljs.core.first(arglist__24066);
var value = cljs.core.rest(arglist__24066);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24071_24075 = cljs.core.seq(domina.nodes(content));var chunk__24072_24076 = null;var count__24073_24077 = 0;var i__24074_24078 = 0;while(true){
if((i__24074_24078 < count__24073_24077))
{var n_24079 = chunk__24072_24076.cljs$core$IIndexed$_nth$arity$2(null,i__24074_24078);n_24079.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24080 = seq__24071_24075;
var G__24081 = chunk__24072_24076;
var G__24082 = count__24073_24077;
var G__24083 = (i__24074_24078 + 1);
seq__24071_24075 = G__24080;
chunk__24072_24076 = G__24081;
count__24073_24077 = G__24082;
i__24074_24078 = G__24083;
continue;
}
} else
{var temp__4092__auto___24084 = cljs.core.seq(seq__24071_24075);if(temp__4092__auto___24084)
{var seq__24071_24085__$1 = temp__4092__auto___24084;if(cljs.core.chunked_seq_QMARK_(seq__24071_24085__$1))
{var c__4148__auto___24086 = cljs.core.chunk_first(seq__24071_24085__$1);{
var G__24087 = cljs.core.chunk_rest(seq__24071_24085__$1);
var G__24088 = c__4148__auto___24086;
var G__24089 = cljs.core.count(c__4148__auto___24086);
var G__24090 = 0;
seq__24071_24075 = G__24087;
chunk__24072_24076 = G__24088;
count__24073_24077 = G__24089;
i__24074_24078 = G__24090;
continue;
}
} else
{var n_24091 = cljs.core.first(seq__24071_24085__$1);n_24091.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24092 = cljs.core.next(seq__24071_24085__$1);
var G__24093 = null;
var G__24094 = 0;
var G__24095 = 0;
seq__24071_24075 = G__24092;
chunk__24072_24076 = G__24093;
count__24073_24077 = G__24094;
i__24074_24078 = G__24095;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24096){
var content = cljs.core.first(arglist__24096);
arglist__24096 = cljs.core.next(arglist__24096);
var name = cljs.core.first(arglist__24096);
var value = cljs.core.rest(arglist__24096);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24101_24105 = cljs.core.seq(domina.nodes(content));var chunk__24102_24106 = null;var count__24103_24107 = 0;var i__24104_24108 = 0;while(true){
if((i__24104_24108 < count__24103_24107))
{var n_24109 = chunk__24102_24106.cljs$core$IIndexed$_nth$arity$2(null,i__24104_24108);n_24109.removeAttribute(cljs.core.name(name));
{
var G__24110 = seq__24101_24105;
var G__24111 = chunk__24102_24106;
var G__24112 = count__24103_24107;
var G__24113 = (i__24104_24108 + 1);
seq__24101_24105 = G__24110;
chunk__24102_24106 = G__24111;
count__24103_24107 = G__24112;
i__24104_24108 = G__24113;
continue;
}
} else
{var temp__4092__auto___24114 = cljs.core.seq(seq__24101_24105);if(temp__4092__auto___24114)
{var seq__24101_24115__$1 = temp__4092__auto___24114;if(cljs.core.chunked_seq_QMARK_(seq__24101_24115__$1))
{var c__4148__auto___24116 = cljs.core.chunk_first(seq__24101_24115__$1);{
var G__24117 = cljs.core.chunk_rest(seq__24101_24115__$1);
var G__24118 = c__4148__auto___24116;
var G__24119 = cljs.core.count(c__4148__auto___24116);
var G__24120 = 0;
seq__24101_24105 = G__24117;
chunk__24102_24106 = G__24118;
count__24103_24107 = G__24119;
i__24104_24108 = G__24120;
continue;
}
} else
{var n_24121 = cljs.core.first(seq__24101_24115__$1);n_24121.removeAttribute(cljs.core.name(name));
{
var G__24122 = cljs.core.next(seq__24101_24115__$1);
var G__24123 = null;
var G__24124 = 0;
var G__24125 = 0;
seq__24101_24105 = G__24122;
chunk__24102_24106 = G__24123;
count__24103_24107 = G__24124;
i__24104_24108 = G__24125;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__24127 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24127,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24127,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$112)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24128_SHARP_){var attr = attrs__$1.item(p1__24128_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24135_24141 = cljs.core.seq(styles);var chunk__24136_24142 = null;var count__24137_24143 = 0;var i__24138_24144 = 0;while(true){
if((i__24138_24144 < count__24137_24143))
{var vec__24139_24145 = chunk__24136_24142.cljs$core$IIndexed$_nth$arity$2(null,i__24138_24144);var name_24146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139_24145,0,null);var value_24147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139_24145,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24146,cljs.core.array_seq([value_24147], 0));
{
var G__24148 = seq__24135_24141;
var G__24149 = chunk__24136_24142;
var G__24150 = count__24137_24143;
var G__24151 = (i__24138_24144 + 1);
seq__24135_24141 = G__24148;
chunk__24136_24142 = G__24149;
count__24137_24143 = G__24150;
i__24138_24144 = G__24151;
continue;
}
} else
{var temp__4092__auto___24152 = cljs.core.seq(seq__24135_24141);if(temp__4092__auto___24152)
{var seq__24135_24153__$1 = temp__4092__auto___24152;if(cljs.core.chunked_seq_QMARK_(seq__24135_24153__$1))
{var c__4148__auto___24154 = cljs.core.chunk_first(seq__24135_24153__$1);{
var G__24155 = cljs.core.chunk_rest(seq__24135_24153__$1);
var G__24156 = c__4148__auto___24154;
var G__24157 = cljs.core.count(c__4148__auto___24154);
var G__24158 = 0;
seq__24135_24141 = G__24155;
chunk__24136_24142 = G__24156;
count__24137_24143 = G__24157;
i__24138_24144 = G__24158;
continue;
}
} else
{var vec__24140_24159 = cljs.core.first(seq__24135_24153__$1);var name_24160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24140_24159,0,null);var value_24161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24140_24159,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24160,cljs.core.array_seq([value_24161], 0));
{
var G__24162 = cljs.core.next(seq__24135_24153__$1);
var G__24163 = null;
var G__24164 = 0;
var G__24165 = 0;
seq__24135_24141 = G__24162;
chunk__24136_24142 = G__24163;
count__24137_24143 = G__24164;
i__24138_24144 = G__24165;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24172_24178 = cljs.core.seq(attrs);var chunk__24173_24179 = null;var count__24174_24180 = 0;var i__24175_24181 = 0;while(true){
if((i__24175_24181 < count__24174_24180))
{var vec__24176_24182 = chunk__24173_24179.cljs$core$IIndexed$_nth$arity$2(null,i__24175_24181);var name_24183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176_24182,0,null);var value_24184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176_24182,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24183,cljs.core.array_seq([value_24184], 0));
{
var G__24185 = seq__24172_24178;
var G__24186 = chunk__24173_24179;
var G__24187 = count__24174_24180;
var G__24188 = (i__24175_24181 + 1);
seq__24172_24178 = G__24185;
chunk__24173_24179 = G__24186;
count__24174_24180 = G__24187;
i__24175_24181 = G__24188;
continue;
}
} else
{var temp__4092__auto___24189 = cljs.core.seq(seq__24172_24178);if(temp__4092__auto___24189)
{var seq__24172_24190__$1 = temp__4092__auto___24189;if(cljs.core.chunked_seq_QMARK_(seq__24172_24190__$1))
{var c__4148__auto___24191 = cljs.core.chunk_first(seq__24172_24190__$1);{
var G__24192 = cljs.core.chunk_rest(seq__24172_24190__$1);
var G__24193 = c__4148__auto___24191;
var G__24194 = cljs.core.count(c__4148__auto___24191);
var G__24195 = 0;
seq__24172_24178 = G__24192;
chunk__24173_24179 = G__24193;
count__24174_24180 = G__24194;
i__24175_24181 = G__24195;
continue;
}
} else
{var vec__24177_24196 = cljs.core.first(seq__24172_24190__$1);var name_24197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24177_24196,0,null);var value_24198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24177_24196,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24197,cljs.core.array_seq([value_24198], 0));
{
var G__24199 = cljs.core.next(seq__24172_24190__$1);
var G__24200 = null;
var G__24201 = 0;
var G__24202 = 0;
seq__24172_24178 = G__24199;
chunk__24173_24179 = G__24200;
count__24174_24180 = G__24201;
i__24175_24181 = G__24202;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24207_24211 = cljs.core.seq(domina.nodes(content));var chunk__24208_24212 = null;var count__24209_24213 = 0;var i__24210_24214 = 0;while(true){
if((i__24210_24214 < count__24209_24213))
{var node_24215 = chunk__24208_24212.cljs$core$IIndexed$_nth$arity$2(null,i__24210_24214);goog.dom.classes.add(node_24215,class$);
{
var G__24216 = seq__24207_24211;
var G__24217 = chunk__24208_24212;
var G__24218 = count__24209_24213;
var G__24219 = (i__24210_24214 + 1);
seq__24207_24211 = G__24216;
chunk__24208_24212 = G__24217;
count__24209_24213 = G__24218;
i__24210_24214 = G__24219;
continue;
}
} else
{var temp__4092__auto___24220 = cljs.core.seq(seq__24207_24211);if(temp__4092__auto___24220)
{var seq__24207_24221__$1 = temp__4092__auto___24220;if(cljs.core.chunked_seq_QMARK_(seq__24207_24221__$1))
{var c__4148__auto___24222 = cljs.core.chunk_first(seq__24207_24221__$1);{
var G__24223 = cljs.core.chunk_rest(seq__24207_24221__$1);
var G__24224 = c__4148__auto___24222;
var G__24225 = cljs.core.count(c__4148__auto___24222);
var G__24226 = 0;
seq__24207_24211 = G__24223;
chunk__24208_24212 = G__24224;
count__24209_24213 = G__24225;
i__24210_24214 = G__24226;
continue;
}
} else
{var node_24227 = cljs.core.first(seq__24207_24221__$1);goog.dom.classes.add(node_24227,class$);
{
var G__24228 = cljs.core.next(seq__24207_24221__$1);
var G__24229 = null;
var G__24230 = 0;
var G__24231 = 0;
seq__24207_24211 = G__24228;
chunk__24208_24212 = G__24229;
count__24209_24213 = G__24230;
i__24210_24214 = G__24231;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24236_24240 = cljs.core.seq(domina.nodes(content));var chunk__24237_24241 = null;var count__24238_24242 = 0;var i__24239_24243 = 0;while(true){
if((i__24239_24243 < count__24238_24242))
{var node_24244 = chunk__24237_24241.cljs$core$IIndexed$_nth$arity$2(null,i__24239_24243);goog.dom.classes.remove(node_24244,class$);
{
var G__24245 = seq__24236_24240;
var G__24246 = chunk__24237_24241;
var G__24247 = count__24238_24242;
var G__24248 = (i__24239_24243 + 1);
seq__24236_24240 = G__24245;
chunk__24237_24241 = G__24246;
count__24238_24242 = G__24247;
i__24239_24243 = G__24248;
continue;
}
} else
{var temp__4092__auto___24249 = cljs.core.seq(seq__24236_24240);if(temp__4092__auto___24249)
{var seq__24236_24250__$1 = temp__4092__auto___24249;if(cljs.core.chunked_seq_QMARK_(seq__24236_24250__$1))
{var c__4148__auto___24251 = cljs.core.chunk_first(seq__24236_24250__$1);{
var G__24252 = cljs.core.chunk_rest(seq__24236_24250__$1);
var G__24253 = c__4148__auto___24251;
var G__24254 = cljs.core.count(c__4148__auto___24251);
var G__24255 = 0;
seq__24236_24240 = G__24252;
chunk__24237_24241 = G__24253;
count__24238_24242 = G__24254;
i__24239_24243 = G__24255;
continue;
}
} else
{var node_24256 = cljs.core.first(seq__24236_24250__$1);goog.dom.classes.remove(node_24256,class$);
{
var G__24257 = cljs.core.next(seq__24236_24250__$1);
var G__24258 = null;
var G__24259 = 0;
var G__24260 = 0;
seq__24236_24240 = G__24257;
chunk__24237_24241 = G__24258;
count__24238_24242 = G__24259;
i__24239_24243 = G__24260;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24265_24269 = cljs.core.seq(domina.nodes(content));var chunk__24266_24270 = null;var count__24267_24271 = 0;var i__24268_24272 = 0;while(true){
if((i__24268_24272 < count__24267_24271))
{var node_24273 = chunk__24266_24270.cljs$core$IIndexed$_nth$arity$2(null,i__24268_24272);goog.dom.classes.toggle(node_24273,class$);
{
var G__24274 = seq__24265_24269;
var G__24275 = chunk__24266_24270;
var G__24276 = count__24267_24271;
var G__24277 = (i__24268_24272 + 1);
seq__24265_24269 = G__24274;
chunk__24266_24270 = G__24275;
count__24267_24271 = G__24276;
i__24268_24272 = G__24277;
continue;
}
} else
{var temp__4092__auto___24278 = cljs.core.seq(seq__24265_24269);if(temp__4092__auto___24278)
{var seq__24265_24279__$1 = temp__4092__auto___24278;if(cljs.core.chunked_seq_QMARK_(seq__24265_24279__$1))
{var c__4148__auto___24280 = cljs.core.chunk_first(seq__24265_24279__$1);{
var G__24281 = cljs.core.chunk_rest(seq__24265_24279__$1);
var G__24282 = c__4148__auto___24280;
var G__24283 = cljs.core.count(c__4148__auto___24280);
var G__24284 = 0;
seq__24265_24269 = G__24281;
chunk__24266_24270 = G__24282;
count__24267_24271 = G__24283;
i__24268_24272 = G__24284;
continue;
}
} else
{var node_24285 = cljs.core.first(seq__24265_24279__$1);goog.dom.classes.toggle(node_24285,class$);
{
var G__24286 = cljs.core.next(seq__24265_24279__$1);
var G__24287 = null;
var G__24288 = 0;
var G__24289 = 0;
seq__24265_24269 = G__24286;
chunk__24266_24270 = G__24287;
count__24267_24271 = G__24288;
i__24268_24272 = G__24289;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24298__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24294_24299 = cljs.core.seq(domina.nodes(content));var chunk__24295_24300 = null;var count__24296_24301 = 0;var i__24297_24302 = 0;while(true){
if((i__24297_24302 < count__24296_24301))
{var node_24303 = chunk__24295_24300.cljs$core$IIndexed$_nth$arity$2(null,i__24297_24302);goog.dom.classes.set(node_24303,classes_24298__$1);
{
var G__24304 = seq__24294_24299;
var G__24305 = chunk__24295_24300;
var G__24306 = count__24296_24301;
var G__24307 = (i__24297_24302 + 1);
seq__24294_24299 = G__24304;
chunk__24295_24300 = G__24305;
count__24296_24301 = G__24306;
i__24297_24302 = G__24307;
continue;
}
} else
{var temp__4092__auto___24308 = cljs.core.seq(seq__24294_24299);if(temp__4092__auto___24308)
{var seq__24294_24309__$1 = temp__4092__auto___24308;if(cljs.core.chunked_seq_QMARK_(seq__24294_24309__$1))
{var c__4148__auto___24310 = cljs.core.chunk_first(seq__24294_24309__$1);{
var G__24311 = cljs.core.chunk_rest(seq__24294_24309__$1);
var G__24312 = c__4148__auto___24310;
var G__24313 = cljs.core.count(c__4148__auto___24310);
var G__24314 = 0;
seq__24294_24299 = G__24311;
chunk__24295_24300 = G__24312;
count__24296_24301 = G__24313;
i__24297_24302 = G__24314;
continue;
}
} else
{var node_24315 = cljs.core.first(seq__24294_24309__$1);goog.dom.classes.set(node_24315,classes_24298__$1);
{
var G__24316 = cljs.core.next(seq__24294_24309__$1);
var G__24317 = null;
var G__24318 = 0;
var G__24319 = 0;
seq__24294_24299 = G__24316;
chunk__24295_24300 = G__24317;
count__24296_24301 = G__24318;
i__24297_24302 = G__24319;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24324_24328 = cljs.core.seq(domina.nodes(content));var chunk__24325_24329 = null;var count__24326_24330 = 0;var i__24327_24331 = 0;while(true){
if((i__24327_24331 < count__24326_24330))
{var node_24332 = chunk__24325_24329.cljs$core$IIndexed$_nth$arity$2(null,i__24327_24331);goog.dom.setTextContent(node_24332,value);
{
var G__24333 = seq__24324_24328;
var G__24334 = chunk__24325_24329;
var G__24335 = count__24326_24330;
var G__24336 = (i__24327_24331 + 1);
seq__24324_24328 = G__24333;
chunk__24325_24329 = G__24334;
count__24326_24330 = G__24335;
i__24327_24331 = G__24336;
continue;
}
} else
{var temp__4092__auto___24337 = cljs.core.seq(seq__24324_24328);if(temp__4092__auto___24337)
{var seq__24324_24338__$1 = temp__4092__auto___24337;if(cljs.core.chunked_seq_QMARK_(seq__24324_24338__$1))
{var c__4148__auto___24339 = cljs.core.chunk_first(seq__24324_24338__$1);{
var G__24340 = cljs.core.chunk_rest(seq__24324_24338__$1);
var G__24341 = c__4148__auto___24339;
var G__24342 = cljs.core.count(c__4148__auto___24339);
var G__24343 = 0;
seq__24324_24328 = G__24340;
chunk__24325_24329 = G__24341;
count__24326_24330 = G__24342;
i__24327_24331 = G__24343;
continue;
}
} else
{var node_24344 = cljs.core.first(seq__24324_24338__$1);goog.dom.setTextContent(node_24344,value);
{
var G__24345 = cljs.core.next(seq__24324_24338__$1);
var G__24346 = null;
var G__24347 = 0;
var G__24348 = 0;
seq__24324_24328 = G__24345;
chunk__24325_24329 = G__24346;
count__24326_24330 = G__24347;
i__24327_24331 = G__24348;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24353_24357 = cljs.core.seq(domina.nodes(content));var chunk__24354_24358 = null;var count__24355_24359 = 0;var i__24356_24360 = 0;while(true){
if((i__24356_24360 < count__24355_24359))
{var node_24361 = chunk__24354_24358.cljs$core$IIndexed$_nth$arity$2(null,i__24356_24360);goog.dom.forms.setValue(node_24361,value);
{
var G__24362 = seq__24353_24357;
var G__24363 = chunk__24354_24358;
var G__24364 = count__24355_24359;
var G__24365 = (i__24356_24360 + 1);
seq__24353_24357 = G__24362;
chunk__24354_24358 = G__24363;
count__24355_24359 = G__24364;
i__24356_24360 = G__24365;
continue;
}
} else
{var temp__4092__auto___24366 = cljs.core.seq(seq__24353_24357);if(temp__4092__auto___24366)
{var seq__24353_24367__$1 = temp__4092__auto___24366;if(cljs.core.chunked_seq_QMARK_(seq__24353_24367__$1))
{var c__4148__auto___24368 = cljs.core.chunk_first(seq__24353_24367__$1);{
var G__24369 = cljs.core.chunk_rest(seq__24353_24367__$1);
var G__24370 = c__4148__auto___24368;
var G__24371 = cljs.core.count(c__4148__auto___24368);
var G__24372 = 0;
seq__24353_24357 = G__24369;
chunk__24354_24358 = G__24370;
count__24355_24359 = G__24371;
i__24356_24360 = G__24372;
continue;
}
} else
{var node_24373 = cljs.core.first(seq__24353_24367__$1);goog.dom.forms.setValue(node_24373,value);
{
var G__24374 = cljs.core.next(seq__24353_24367__$1);
var G__24375 = null;
var G__24376 = 0;
var G__24377 = 0;
seq__24353_24357 = G__24374;
chunk__24354_24358 = G__24375;
count__24355_24359 = G__24376;
i__24356_24360 = G__24377;
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
{var value_24388 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24384_24389 = cljs.core.seq(domina.nodes(content));var chunk__24385_24390 = null;var count__24386_24391 = 0;var i__24387_24392 = 0;while(true){
if((i__24387_24392 < count__24386_24391))
{var node_24393 = chunk__24385_24390.cljs$core$IIndexed$_nth$arity$2(null,i__24387_24392);node_24393.innerHTML = value_24388;
{
var G__24394 = seq__24384_24389;
var G__24395 = chunk__24385_24390;
var G__24396 = count__24386_24391;
var G__24397 = (i__24387_24392 + 1);
seq__24384_24389 = G__24394;
chunk__24385_24390 = G__24395;
count__24386_24391 = G__24396;
i__24387_24392 = G__24397;
continue;
}
} else
{var temp__4092__auto___24398 = cljs.core.seq(seq__24384_24389);if(temp__4092__auto___24398)
{var seq__24384_24399__$1 = temp__4092__auto___24398;if(cljs.core.chunked_seq_QMARK_(seq__24384_24399__$1))
{var c__4148__auto___24400 = cljs.core.chunk_first(seq__24384_24399__$1);{
var G__24401 = cljs.core.chunk_rest(seq__24384_24399__$1);
var G__24402 = c__4148__auto___24400;
var G__24403 = cljs.core.count(c__4148__auto___24400);
var G__24404 = 0;
seq__24384_24389 = G__24401;
chunk__24385_24390 = G__24402;
count__24386_24391 = G__24403;
i__24387_24392 = G__24404;
continue;
}
} else
{var node_24405 = cljs.core.first(seq__24384_24399__$1);node_24405.innerHTML = value_24388;
{
var G__24406 = cljs.core.next(seq__24384_24399__$1);
var G__24407 = null;
var G__24408 = 0;
var G__24409 = 0;
seq__24384_24389 = G__24406;
chunk__24385_24390 = G__24407;
count__24386_24391 = G__24408;
i__24387_24392 = G__24409;
continue;
}
}
} else
{}
}
break;
}
}catch (e24383){if((e24383 instanceof Error))
{var e_24410 = e24383;domina.replace_children_BANG_(content,value_24388);
} else
{if(cljs.core.constant$keyword$112)
{throw e24383;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24417_24421 = cljs.core.seq(children);var chunk__24418_24422 = null;var count__24419_24423 = 0;var i__24420_24424 = 0;while(true){
if((i__24420_24424 < count__24419_24423))
{var child_24425 = chunk__24418_24422.cljs$core$IIndexed$_nth$arity$2(null,i__24420_24424);frag.appendChild(child_24425);
{
var G__24426 = seq__24417_24421;
var G__24427 = chunk__24418_24422;
var G__24428 = count__24419_24423;
var G__24429 = (i__24420_24424 + 1);
seq__24417_24421 = G__24426;
chunk__24418_24422 = G__24427;
count__24419_24423 = G__24428;
i__24420_24424 = G__24429;
continue;
}
} else
{var temp__4092__auto___24430 = cljs.core.seq(seq__24417_24421);if(temp__4092__auto___24430)
{var seq__24417_24431__$1 = temp__4092__auto___24430;if(cljs.core.chunked_seq_QMARK_(seq__24417_24431__$1))
{var c__4148__auto___24432 = cljs.core.chunk_first(seq__24417_24431__$1);{
var G__24433 = cljs.core.chunk_rest(seq__24417_24431__$1);
var G__24434 = c__4148__auto___24432;
var G__24435 = cljs.core.count(c__4148__auto___24432);
var G__24436 = 0;
seq__24417_24421 = G__24433;
chunk__24418_24422 = G__24434;
count__24419_24423 = G__24435;
i__24420_24424 = G__24436;
continue;
}
} else
{var child_24437 = cljs.core.first(seq__24417_24431__$1);frag.appendChild(child_24437);
{
var G__24438 = cljs.core.next(seq__24417_24431__$1);
var G__24439 = null;
var G__24440 = 0;
var G__24441 = 0;
seq__24417_24421 = G__24438;
chunk__24418_24422 = G__24439;
count__24419_24423 = G__24440;
i__24420_24424 = G__24441;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24411_SHARP_,p2__24412_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24411_SHARP_,p2__24412_SHARP_) : f.call(null,p1__24411_SHARP_,p2__24412_SHARP_));
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
{if((function (){var G__24443 = list_thing;if(G__24443)
{var bit__4050__auto__ = (G__24443.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24443.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24443.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24443);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24443);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24444 = content;if(G__24444)
{var bit__4050__auto__ = (G__24444.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24444.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24444);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24444);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24445 = content;if(G__24445)
{var bit__4050__auto__ = (G__24445.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24445.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24445);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24445);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$113)
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
