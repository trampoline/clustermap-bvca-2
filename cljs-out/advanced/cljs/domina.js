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
var opt_wrapper_23958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23959 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$110,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_23959,table_section_wrapper_23959,opt_wrapper_23958,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_23960,table_section_wrapper_23959,cell_wrapper_23960,opt_wrapper_23958,table_section_wrapper_23959,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_23959]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__23965 = cljs.core.seq(tbody);var chunk__23966 = null;var count__23967 = 0;var i__23968 = 0;while(true){
if((i__23968 < count__23967))
{var child = chunk__23966.cljs$core$IIndexed$_nth$arity$2(null,i__23968);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23969 = seq__23965;
var G__23970 = chunk__23966;
var G__23971 = count__23967;
var G__23972 = (i__23968 + 1);
seq__23965 = G__23969;
chunk__23966 = G__23970;
count__23967 = G__23971;
i__23968 = G__23972;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23965);if(temp__4092__auto__)
{var seq__23965__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23965__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23965__$1);{
var G__23973 = cljs.core.chunk_rest(seq__23965__$1);
var G__23974 = c__4148__auto__;
var G__23975 = cljs.core.count(c__4148__auto__);
var G__23976 = 0;
seq__23965 = G__23973;
chunk__23966 = G__23974;
count__23967 = G__23975;
i__23968 = G__23976;
continue;
}
} else
{var child = cljs.core.first(seq__23965__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23977 = cljs.core.next(seq__23965__$1);
var G__23978 = null;
var G__23979 = 0;
var G__23980 = 0;
seq__23965 = G__23977;
chunk__23966 = G__23978;
count__23967 = G__23979;
i__23968 = G__23980;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__23982 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23982,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__23983 = wrapper.lastChild;
var G__23984 = (level - 1);
wrapper = G__23983;
level = G__23984;
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
domina.DomContent = (function (){var obj23986 = {};return obj23986;
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
log_debug.cljs$lang$applyTo = (function (arglist__23987){
var mesg = cljs.core.seq(arglist__23987);
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
log.cljs$lang$applyTo = (function (arglist__23988){
var mesg = cljs.core.seq(arglist__23988);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23989){
var contents = cljs.core.seq(arglist__23989);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23990_SHARP_){return p1__23990_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23991_SHARP_,p2__23992_SHARP_){return goog.dom.insertChildAt(p1__23991_SHARP_,p2__23992_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__23991_SHARP_,p2__23992_SHARP_){return goog.dom.insertChildAt(p1__23991_SHARP_,p2__23992_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23994_SHARP_,p2__23993_SHARP_){return goog.dom.insertSiblingBefore(p2__23993_SHARP_,p1__23994_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23994_SHARP_,p2__23993_SHARP_){return goog.dom.insertSiblingBefore(p2__23993_SHARP_,p1__23994_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23996_SHARP_,p2__23995_SHARP_){return goog.dom.insertSiblingAfter(p2__23995_SHARP_,p1__23996_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23996_SHARP_,p2__23995_SHARP_){return goog.dom.insertSiblingAfter(p2__23995_SHARP_,p1__23996_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23998_SHARP_,p2__23997_SHARP_){return goog.dom.replaceNode(p2__23997_SHARP_,p1__23998_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23998_SHARP_,p2__23997_SHARP_){return goog.dom.replaceNode(p2__23997_SHARP_,p1__23998_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24003_24007 = cljs.core.seq(domina.nodes(content));var chunk__24004_24008 = null;var count__24005_24009 = 0;var i__24006_24010 = 0;while(true){
if((i__24006_24010 < count__24005_24009))
{var n_24011 = chunk__24004_24008.cljs$core$IIndexed$_nth$arity$2(null,i__24006_24010);goog.style.setStyle(n_24011,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24012 = seq__24003_24007;
var G__24013 = chunk__24004_24008;
var G__24014 = count__24005_24009;
var G__24015 = (i__24006_24010 + 1);
seq__24003_24007 = G__24012;
chunk__24004_24008 = G__24013;
count__24005_24009 = G__24014;
i__24006_24010 = G__24015;
continue;
}
} else
{var temp__4092__auto___24016 = cljs.core.seq(seq__24003_24007);if(temp__4092__auto___24016)
{var seq__24003_24017__$1 = temp__4092__auto___24016;if(cljs.core.chunked_seq_QMARK_(seq__24003_24017__$1))
{var c__4148__auto___24018 = cljs.core.chunk_first(seq__24003_24017__$1);{
var G__24019 = cljs.core.chunk_rest(seq__24003_24017__$1);
var G__24020 = c__4148__auto___24018;
var G__24021 = cljs.core.count(c__4148__auto___24018);
var G__24022 = 0;
seq__24003_24007 = G__24019;
chunk__24004_24008 = G__24020;
count__24005_24009 = G__24021;
i__24006_24010 = G__24022;
continue;
}
} else
{var n_24023 = cljs.core.first(seq__24003_24017__$1);goog.style.setStyle(n_24023,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24024 = cljs.core.next(seq__24003_24017__$1);
var G__24025 = null;
var G__24026 = 0;
var G__24027 = 0;
seq__24003_24007 = G__24024;
chunk__24004_24008 = G__24025;
count__24005_24009 = G__24026;
i__24006_24010 = G__24027;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24028){
var content = cljs.core.first(arglist__24028);
arglist__24028 = cljs.core.next(arglist__24028);
var name = cljs.core.first(arglist__24028);
var value = cljs.core.rest(arglist__24028);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24033_24037 = cljs.core.seq(domina.nodes(content));var chunk__24034_24038 = null;var count__24035_24039 = 0;var i__24036_24040 = 0;while(true){
if((i__24036_24040 < count__24035_24039))
{var n_24041 = chunk__24034_24038.cljs$core$IIndexed$_nth$arity$2(null,i__24036_24040);n_24041.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24042 = seq__24033_24037;
var G__24043 = chunk__24034_24038;
var G__24044 = count__24035_24039;
var G__24045 = (i__24036_24040 + 1);
seq__24033_24037 = G__24042;
chunk__24034_24038 = G__24043;
count__24035_24039 = G__24044;
i__24036_24040 = G__24045;
continue;
}
} else
{var temp__4092__auto___24046 = cljs.core.seq(seq__24033_24037);if(temp__4092__auto___24046)
{var seq__24033_24047__$1 = temp__4092__auto___24046;if(cljs.core.chunked_seq_QMARK_(seq__24033_24047__$1))
{var c__4148__auto___24048 = cljs.core.chunk_first(seq__24033_24047__$1);{
var G__24049 = cljs.core.chunk_rest(seq__24033_24047__$1);
var G__24050 = c__4148__auto___24048;
var G__24051 = cljs.core.count(c__4148__auto___24048);
var G__24052 = 0;
seq__24033_24037 = G__24049;
chunk__24034_24038 = G__24050;
count__24035_24039 = G__24051;
i__24036_24040 = G__24052;
continue;
}
} else
{var n_24053 = cljs.core.first(seq__24033_24047__$1);n_24053.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24054 = cljs.core.next(seq__24033_24047__$1);
var G__24055 = null;
var G__24056 = 0;
var G__24057 = 0;
seq__24033_24037 = G__24054;
chunk__24034_24038 = G__24055;
count__24035_24039 = G__24056;
i__24036_24040 = G__24057;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24058){
var content = cljs.core.first(arglist__24058);
arglist__24058 = cljs.core.next(arglist__24058);
var name = cljs.core.first(arglist__24058);
var value = cljs.core.rest(arglist__24058);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24063_24067 = cljs.core.seq(domina.nodes(content));var chunk__24064_24068 = null;var count__24065_24069 = 0;var i__24066_24070 = 0;while(true){
if((i__24066_24070 < count__24065_24069))
{var n_24071 = chunk__24064_24068.cljs$core$IIndexed$_nth$arity$2(null,i__24066_24070);n_24071.removeAttribute(cljs.core.name(name));
{
var G__24072 = seq__24063_24067;
var G__24073 = chunk__24064_24068;
var G__24074 = count__24065_24069;
var G__24075 = (i__24066_24070 + 1);
seq__24063_24067 = G__24072;
chunk__24064_24068 = G__24073;
count__24065_24069 = G__24074;
i__24066_24070 = G__24075;
continue;
}
} else
{var temp__4092__auto___24076 = cljs.core.seq(seq__24063_24067);if(temp__4092__auto___24076)
{var seq__24063_24077__$1 = temp__4092__auto___24076;if(cljs.core.chunked_seq_QMARK_(seq__24063_24077__$1))
{var c__4148__auto___24078 = cljs.core.chunk_first(seq__24063_24077__$1);{
var G__24079 = cljs.core.chunk_rest(seq__24063_24077__$1);
var G__24080 = c__4148__auto___24078;
var G__24081 = cljs.core.count(c__4148__auto___24078);
var G__24082 = 0;
seq__24063_24067 = G__24079;
chunk__24064_24068 = G__24080;
count__24065_24069 = G__24081;
i__24066_24070 = G__24082;
continue;
}
} else
{var n_24083 = cljs.core.first(seq__24063_24077__$1);n_24083.removeAttribute(cljs.core.name(name));
{
var G__24084 = cljs.core.next(seq__24063_24077__$1);
var G__24085 = null;
var G__24086 = 0;
var G__24087 = 0;
seq__24063_24067 = G__24084;
chunk__24064_24068 = G__24085;
count__24065_24069 = G__24086;
i__24066_24070 = G__24087;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__24089 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$109)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24090_SHARP_){var attr = attrs__$1.item(p1__24090_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24097_24103 = cljs.core.seq(styles);var chunk__24098_24104 = null;var count__24099_24105 = 0;var i__24100_24106 = 0;while(true){
if((i__24100_24106 < count__24099_24105))
{var vec__24101_24107 = chunk__24098_24104.cljs$core$IIndexed$_nth$arity$2(null,i__24100_24106);var name_24108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24101_24107,0,null);var value_24109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24101_24107,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24108,cljs.core.array_seq([value_24109], 0));
{
var G__24110 = seq__24097_24103;
var G__24111 = chunk__24098_24104;
var G__24112 = count__24099_24105;
var G__24113 = (i__24100_24106 + 1);
seq__24097_24103 = G__24110;
chunk__24098_24104 = G__24111;
count__24099_24105 = G__24112;
i__24100_24106 = G__24113;
continue;
}
} else
{var temp__4092__auto___24114 = cljs.core.seq(seq__24097_24103);if(temp__4092__auto___24114)
{var seq__24097_24115__$1 = temp__4092__auto___24114;if(cljs.core.chunked_seq_QMARK_(seq__24097_24115__$1))
{var c__4148__auto___24116 = cljs.core.chunk_first(seq__24097_24115__$1);{
var G__24117 = cljs.core.chunk_rest(seq__24097_24115__$1);
var G__24118 = c__4148__auto___24116;
var G__24119 = cljs.core.count(c__4148__auto___24116);
var G__24120 = 0;
seq__24097_24103 = G__24117;
chunk__24098_24104 = G__24118;
count__24099_24105 = G__24119;
i__24100_24106 = G__24120;
continue;
}
} else
{var vec__24102_24121 = cljs.core.first(seq__24097_24115__$1);var name_24122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102_24121,0,null);var value_24123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24102_24121,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24122,cljs.core.array_seq([value_24123], 0));
{
var G__24124 = cljs.core.next(seq__24097_24115__$1);
var G__24125 = null;
var G__24126 = 0;
var G__24127 = 0;
seq__24097_24103 = G__24124;
chunk__24098_24104 = G__24125;
count__24099_24105 = G__24126;
i__24100_24106 = G__24127;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24134_24140 = cljs.core.seq(attrs);var chunk__24135_24141 = null;var count__24136_24142 = 0;var i__24137_24143 = 0;while(true){
if((i__24137_24143 < count__24136_24142))
{var vec__24138_24144 = chunk__24135_24141.cljs$core$IIndexed$_nth$arity$2(null,i__24137_24143);var name_24145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138_24144,0,null);var value_24146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138_24144,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24145,cljs.core.array_seq([value_24146], 0));
{
var G__24147 = seq__24134_24140;
var G__24148 = chunk__24135_24141;
var G__24149 = count__24136_24142;
var G__24150 = (i__24137_24143 + 1);
seq__24134_24140 = G__24147;
chunk__24135_24141 = G__24148;
count__24136_24142 = G__24149;
i__24137_24143 = G__24150;
continue;
}
} else
{var temp__4092__auto___24151 = cljs.core.seq(seq__24134_24140);if(temp__4092__auto___24151)
{var seq__24134_24152__$1 = temp__4092__auto___24151;if(cljs.core.chunked_seq_QMARK_(seq__24134_24152__$1))
{var c__4148__auto___24153 = cljs.core.chunk_first(seq__24134_24152__$1);{
var G__24154 = cljs.core.chunk_rest(seq__24134_24152__$1);
var G__24155 = c__4148__auto___24153;
var G__24156 = cljs.core.count(c__4148__auto___24153);
var G__24157 = 0;
seq__24134_24140 = G__24154;
chunk__24135_24141 = G__24155;
count__24136_24142 = G__24156;
i__24137_24143 = G__24157;
continue;
}
} else
{var vec__24139_24158 = cljs.core.first(seq__24134_24152__$1);var name_24159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139_24158,0,null);var value_24160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139_24158,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24159,cljs.core.array_seq([value_24160], 0));
{
var G__24161 = cljs.core.next(seq__24134_24152__$1);
var G__24162 = null;
var G__24163 = 0;
var G__24164 = 0;
seq__24134_24140 = G__24161;
chunk__24135_24141 = G__24162;
count__24136_24142 = G__24163;
i__24137_24143 = G__24164;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24169_24173 = cljs.core.seq(domina.nodes(content));var chunk__24170_24174 = null;var count__24171_24175 = 0;var i__24172_24176 = 0;while(true){
if((i__24172_24176 < count__24171_24175))
{var node_24177 = chunk__24170_24174.cljs$core$IIndexed$_nth$arity$2(null,i__24172_24176);goog.dom.classes.add(node_24177,class$);
{
var G__24178 = seq__24169_24173;
var G__24179 = chunk__24170_24174;
var G__24180 = count__24171_24175;
var G__24181 = (i__24172_24176 + 1);
seq__24169_24173 = G__24178;
chunk__24170_24174 = G__24179;
count__24171_24175 = G__24180;
i__24172_24176 = G__24181;
continue;
}
} else
{var temp__4092__auto___24182 = cljs.core.seq(seq__24169_24173);if(temp__4092__auto___24182)
{var seq__24169_24183__$1 = temp__4092__auto___24182;if(cljs.core.chunked_seq_QMARK_(seq__24169_24183__$1))
{var c__4148__auto___24184 = cljs.core.chunk_first(seq__24169_24183__$1);{
var G__24185 = cljs.core.chunk_rest(seq__24169_24183__$1);
var G__24186 = c__4148__auto___24184;
var G__24187 = cljs.core.count(c__4148__auto___24184);
var G__24188 = 0;
seq__24169_24173 = G__24185;
chunk__24170_24174 = G__24186;
count__24171_24175 = G__24187;
i__24172_24176 = G__24188;
continue;
}
} else
{var node_24189 = cljs.core.first(seq__24169_24183__$1);goog.dom.classes.add(node_24189,class$);
{
var G__24190 = cljs.core.next(seq__24169_24183__$1);
var G__24191 = null;
var G__24192 = 0;
var G__24193 = 0;
seq__24169_24173 = G__24190;
chunk__24170_24174 = G__24191;
count__24171_24175 = G__24192;
i__24172_24176 = G__24193;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24198_24202 = cljs.core.seq(domina.nodes(content));var chunk__24199_24203 = null;var count__24200_24204 = 0;var i__24201_24205 = 0;while(true){
if((i__24201_24205 < count__24200_24204))
{var node_24206 = chunk__24199_24203.cljs$core$IIndexed$_nth$arity$2(null,i__24201_24205);goog.dom.classes.remove(node_24206,class$);
{
var G__24207 = seq__24198_24202;
var G__24208 = chunk__24199_24203;
var G__24209 = count__24200_24204;
var G__24210 = (i__24201_24205 + 1);
seq__24198_24202 = G__24207;
chunk__24199_24203 = G__24208;
count__24200_24204 = G__24209;
i__24201_24205 = G__24210;
continue;
}
} else
{var temp__4092__auto___24211 = cljs.core.seq(seq__24198_24202);if(temp__4092__auto___24211)
{var seq__24198_24212__$1 = temp__4092__auto___24211;if(cljs.core.chunked_seq_QMARK_(seq__24198_24212__$1))
{var c__4148__auto___24213 = cljs.core.chunk_first(seq__24198_24212__$1);{
var G__24214 = cljs.core.chunk_rest(seq__24198_24212__$1);
var G__24215 = c__4148__auto___24213;
var G__24216 = cljs.core.count(c__4148__auto___24213);
var G__24217 = 0;
seq__24198_24202 = G__24214;
chunk__24199_24203 = G__24215;
count__24200_24204 = G__24216;
i__24201_24205 = G__24217;
continue;
}
} else
{var node_24218 = cljs.core.first(seq__24198_24212__$1);goog.dom.classes.remove(node_24218,class$);
{
var G__24219 = cljs.core.next(seq__24198_24212__$1);
var G__24220 = null;
var G__24221 = 0;
var G__24222 = 0;
seq__24198_24202 = G__24219;
chunk__24199_24203 = G__24220;
count__24200_24204 = G__24221;
i__24201_24205 = G__24222;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24227_24231 = cljs.core.seq(domina.nodes(content));var chunk__24228_24232 = null;var count__24229_24233 = 0;var i__24230_24234 = 0;while(true){
if((i__24230_24234 < count__24229_24233))
{var node_24235 = chunk__24228_24232.cljs$core$IIndexed$_nth$arity$2(null,i__24230_24234);goog.dom.classes.toggle(node_24235,class$);
{
var G__24236 = seq__24227_24231;
var G__24237 = chunk__24228_24232;
var G__24238 = count__24229_24233;
var G__24239 = (i__24230_24234 + 1);
seq__24227_24231 = G__24236;
chunk__24228_24232 = G__24237;
count__24229_24233 = G__24238;
i__24230_24234 = G__24239;
continue;
}
} else
{var temp__4092__auto___24240 = cljs.core.seq(seq__24227_24231);if(temp__4092__auto___24240)
{var seq__24227_24241__$1 = temp__4092__auto___24240;if(cljs.core.chunked_seq_QMARK_(seq__24227_24241__$1))
{var c__4148__auto___24242 = cljs.core.chunk_first(seq__24227_24241__$1);{
var G__24243 = cljs.core.chunk_rest(seq__24227_24241__$1);
var G__24244 = c__4148__auto___24242;
var G__24245 = cljs.core.count(c__4148__auto___24242);
var G__24246 = 0;
seq__24227_24231 = G__24243;
chunk__24228_24232 = G__24244;
count__24229_24233 = G__24245;
i__24230_24234 = G__24246;
continue;
}
} else
{var node_24247 = cljs.core.first(seq__24227_24241__$1);goog.dom.classes.toggle(node_24247,class$);
{
var G__24248 = cljs.core.next(seq__24227_24241__$1);
var G__24249 = null;
var G__24250 = 0;
var G__24251 = 0;
seq__24227_24231 = G__24248;
chunk__24228_24232 = G__24249;
count__24229_24233 = G__24250;
i__24230_24234 = G__24251;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24260__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24256_24261 = cljs.core.seq(domina.nodes(content));var chunk__24257_24262 = null;var count__24258_24263 = 0;var i__24259_24264 = 0;while(true){
if((i__24259_24264 < count__24258_24263))
{var node_24265 = chunk__24257_24262.cljs$core$IIndexed$_nth$arity$2(null,i__24259_24264);goog.dom.classes.set(node_24265,classes_24260__$1);
{
var G__24266 = seq__24256_24261;
var G__24267 = chunk__24257_24262;
var G__24268 = count__24258_24263;
var G__24269 = (i__24259_24264 + 1);
seq__24256_24261 = G__24266;
chunk__24257_24262 = G__24267;
count__24258_24263 = G__24268;
i__24259_24264 = G__24269;
continue;
}
} else
{var temp__4092__auto___24270 = cljs.core.seq(seq__24256_24261);if(temp__4092__auto___24270)
{var seq__24256_24271__$1 = temp__4092__auto___24270;if(cljs.core.chunked_seq_QMARK_(seq__24256_24271__$1))
{var c__4148__auto___24272 = cljs.core.chunk_first(seq__24256_24271__$1);{
var G__24273 = cljs.core.chunk_rest(seq__24256_24271__$1);
var G__24274 = c__4148__auto___24272;
var G__24275 = cljs.core.count(c__4148__auto___24272);
var G__24276 = 0;
seq__24256_24261 = G__24273;
chunk__24257_24262 = G__24274;
count__24258_24263 = G__24275;
i__24259_24264 = G__24276;
continue;
}
} else
{var node_24277 = cljs.core.first(seq__24256_24271__$1);goog.dom.classes.set(node_24277,classes_24260__$1);
{
var G__24278 = cljs.core.next(seq__24256_24271__$1);
var G__24279 = null;
var G__24280 = 0;
var G__24281 = 0;
seq__24256_24261 = G__24278;
chunk__24257_24262 = G__24279;
count__24258_24263 = G__24280;
i__24259_24264 = G__24281;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24286_24290 = cljs.core.seq(domina.nodes(content));var chunk__24287_24291 = null;var count__24288_24292 = 0;var i__24289_24293 = 0;while(true){
if((i__24289_24293 < count__24288_24292))
{var node_24294 = chunk__24287_24291.cljs$core$IIndexed$_nth$arity$2(null,i__24289_24293);goog.dom.setTextContent(node_24294,value);
{
var G__24295 = seq__24286_24290;
var G__24296 = chunk__24287_24291;
var G__24297 = count__24288_24292;
var G__24298 = (i__24289_24293 + 1);
seq__24286_24290 = G__24295;
chunk__24287_24291 = G__24296;
count__24288_24292 = G__24297;
i__24289_24293 = G__24298;
continue;
}
} else
{var temp__4092__auto___24299 = cljs.core.seq(seq__24286_24290);if(temp__4092__auto___24299)
{var seq__24286_24300__$1 = temp__4092__auto___24299;if(cljs.core.chunked_seq_QMARK_(seq__24286_24300__$1))
{var c__4148__auto___24301 = cljs.core.chunk_first(seq__24286_24300__$1);{
var G__24302 = cljs.core.chunk_rest(seq__24286_24300__$1);
var G__24303 = c__4148__auto___24301;
var G__24304 = cljs.core.count(c__4148__auto___24301);
var G__24305 = 0;
seq__24286_24290 = G__24302;
chunk__24287_24291 = G__24303;
count__24288_24292 = G__24304;
i__24289_24293 = G__24305;
continue;
}
} else
{var node_24306 = cljs.core.first(seq__24286_24300__$1);goog.dom.setTextContent(node_24306,value);
{
var G__24307 = cljs.core.next(seq__24286_24300__$1);
var G__24308 = null;
var G__24309 = 0;
var G__24310 = 0;
seq__24286_24290 = G__24307;
chunk__24287_24291 = G__24308;
count__24288_24292 = G__24309;
i__24289_24293 = G__24310;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24315_24319 = cljs.core.seq(domina.nodes(content));var chunk__24316_24320 = null;var count__24317_24321 = 0;var i__24318_24322 = 0;while(true){
if((i__24318_24322 < count__24317_24321))
{var node_24323 = chunk__24316_24320.cljs$core$IIndexed$_nth$arity$2(null,i__24318_24322);goog.dom.forms.setValue(node_24323,value);
{
var G__24324 = seq__24315_24319;
var G__24325 = chunk__24316_24320;
var G__24326 = count__24317_24321;
var G__24327 = (i__24318_24322 + 1);
seq__24315_24319 = G__24324;
chunk__24316_24320 = G__24325;
count__24317_24321 = G__24326;
i__24318_24322 = G__24327;
continue;
}
} else
{var temp__4092__auto___24328 = cljs.core.seq(seq__24315_24319);if(temp__4092__auto___24328)
{var seq__24315_24329__$1 = temp__4092__auto___24328;if(cljs.core.chunked_seq_QMARK_(seq__24315_24329__$1))
{var c__4148__auto___24330 = cljs.core.chunk_first(seq__24315_24329__$1);{
var G__24331 = cljs.core.chunk_rest(seq__24315_24329__$1);
var G__24332 = c__4148__auto___24330;
var G__24333 = cljs.core.count(c__4148__auto___24330);
var G__24334 = 0;
seq__24315_24319 = G__24331;
chunk__24316_24320 = G__24332;
count__24317_24321 = G__24333;
i__24318_24322 = G__24334;
continue;
}
} else
{var node_24335 = cljs.core.first(seq__24315_24329__$1);goog.dom.forms.setValue(node_24335,value);
{
var G__24336 = cljs.core.next(seq__24315_24329__$1);
var G__24337 = null;
var G__24338 = 0;
var G__24339 = 0;
seq__24315_24319 = G__24336;
chunk__24316_24320 = G__24337;
count__24317_24321 = G__24338;
i__24318_24322 = G__24339;
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
{var value_24350 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24346_24351 = cljs.core.seq(domina.nodes(content));var chunk__24347_24352 = null;var count__24348_24353 = 0;var i__24349_24354 = 0;while(true){
if((i__24349_24354 < count__24348_24353))
{var node_24355 = chunk__24347_24352.cljs$core$IIndexed$_nth$arity$2(null,i__24349_24354);node_24355.innerHTML = value_24350;
{
var G__24356 = seq__24346_24351;
var G__24357 = chunk__24347_24352;
var G__24358 = count__24348_24353;
var G__24359 = (i__24349_24354 + 1);
seq__24346_24351 = G__24356;
chunk__24347_24352 = G__24357;
count__24348_24353 = G__24358;
i__24349_24354 = G__24359;
continue;
}
} else
{var temp__4092__auto___24360 = cljs.core.seq(seq__24346_24351);if(temp__4092__auto___24360)
{var seq__24346_24361__$1 = temp__4092__auto___24360;if(cljs.core.chunked_seq_QMARK_(seq__24346_24361__$1))
{var c__4148__auto___24362 = cljs.core.chunk_first(seq__24346_24361__$1);{
var G__24363 = cljs.core.chunk_rest(seq__24346_24361__$1);
var G__24364 = c__4148__auto___24362;
var G__24365 = cljs.core.count(c__4148__auto___24362);
var G__24366 = 0;
seq__24346_24351 = G__24363;
chunk__24347_24352 = G__24364;
count__24348_24353 = G__24365;
i__24349_24354 = G__24366;
continue;
}
} else
{var node_24367 = cljs.core.first(seq__24346_24361__$1);node_24367.innerHTML = value_24350;
{
var G__24368 = cljs.core.next(seq__24346_24361__$1);
var G__24369 = null;
var G__24370 = 0;
var G__24371 = 0;
seq__24346_24351 = G__24368;
chunk__24347_24352 = G__24369;
count__24348_24353 = G__24370;
i__24349_24354 = G__24371;
continue;
}
}
} else
{}
}
break;
}
}catch (e24345){if((e24345 instanceof Error))
{var e_24372 = e24345;domina.replace_children_BANG_(content,value_24350);
} else
{if(cljs.core.constant$keyword$109)
{throw e24345;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24379_24383 = cljs.core.seq(children);var chunk__24380_24384 = null;var count__24381_24385 = 0;var i__24382_24386 = 0;while(true){
if((i__24382_24386 < count__24381_24385))
{var child_24387 = chunk__24380_24384.cljs$core$IIndexed$_nth$arity$2(null,i__24382_24386);frag.appendChild(child_24387);
{
var G__24388 = seq__24379_24383;
var G__24389 = chunk__24380_24384;
var G__24390 = count__24381_24385;
var G__24391 = (i__24382_24386 + 1);
seq__24379_24383 = G__24388;
chunk__24380_24384 = G__24389;
count__24381_24385 = G__24390;
i__24382_24386 = G__24391;
continue;
}
} else
{var temp__4092__auto___24392 = cljs.core.seq(seq__24379_24383);if(temp__4092__auto___24392)
{var seq__24379_24393__$1 = temp__4092__auto___24392;if(cljs.core.chunked_seq_QMARK_(seq__24379_24393__$1))
{var c__4148__auto___24394 = cljs.core.chunk_first(seq__24379_24393__$1);{
var G__24395 = cljs.core.chunk_rest(seq__24379_24393__$1);
var G__24396 = c__4148__auto___24394;
var G__24397 = cljs.core.count(c__4148__auto___24394);
var G__24398 = 0;
seq__24379_24383 = G__24395;
chunk__24380_24384 = G__24396;
count__24381_24385 = G__24397;
i__24382_24386 = G__24398;
continue;
}
} else
{var child_24399 = cljs.core.first(seq__24379_24393__$1);frag.appendChild(child_24399);
{
var G__24400 = cljs.core.next(seq__24379_24393__$1);
var G__24401 = null;
var G__24402 = 0;
var G__24403 = 0;
seq__24379_24383 = G__24400;
chunk__24380_24384 = G__24401;
count__24381_24385 = G__24402;
i__24382_24386 = G__24403;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24373_SHARP_,p2__24374_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24373_SHARP_,p2__24374_SHARP_) : f.call(null,p1__24373_SHARP_,p2__24374_SHARP_));
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
{if((function (){var G__24405 = list_thing;if(G__24405)
{var bit__4050__auto__ = (G__24405.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24405.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24405.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24405);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$110)
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
{if((function (){var G__24406 = content;if(G__24406)
{var bit__4050__auto__ = (G__24406.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24406.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24406.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24406);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24406);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$110)
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
{if((function (){var G__24407 = content;if(G__24407)
{var bit__4050__auto__ = (G__24407.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24407.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24407);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24407);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$110)
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
