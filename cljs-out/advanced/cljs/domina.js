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
var opt_wrapper_16958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16959 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16959,table_section_wrapper_16959,opt_wrapper_16958,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16960,table_section_wrapper_16959,cell_wrapper_16960,opt_wrapper_16958,table_section_wrapper_16959,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16959]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16965 = cljs.core.seq(tbody);var chunk__16966 = null;var count__16967 = 0;var i__16968 = 0;while(true){
if((i__16968 < count__16967))
{var child = chunk__16966.cljs$core$IIndexed$_nth$arity$2(null,i__16968);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16969 = seq__16965;
var G__16970 = chunk__16966;
var G__16971 = count__16967;
var G__16972 = (i__16968 + 1);
seq__16965 = G__16969;
chunk__16966 = G__16970;
count__16967 = G__16971;
i__16968 = G__16972;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__16965);if(temp__4092__auto__)
{var seq__16965__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__16965__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__16965__$1);{
var G__16973 = cljs.core.chunk_rest(seq__16965__$1);
var G__16974 = c__4148__auto__;
var G__16975 = cljs.core.count(c__4148__auto__);
var G__16976 = 0;
seq__16965 = G__16973;
chunk__16966 = G__16974;
count__16967 = G__16975;
i__16968 = G__16976;
continue;
}
} else
{var child = cljs.core.first(seq__16965__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16977 = cljs.core.next(seq__16965__$1);
var G__16978 = null;
var G__16979 = 0;
var G__16980 = 0;
seq__16965 = G__16977;
chunk__16966 = G__16978;
count__16967 = G__16979;
i__16968 = G__16980;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16982 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16982,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16982,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16982,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16983 = wrapper.lastChild;
var G__16984 = (level - 1);
wrapper = G__16983;
level = G__16984;
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
domina.DomContent = (function (){var obj16986 = {};return obj16986;
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
log_debug.cljs$lang$applyTo = (function (arglist__16987){
var mesg = cljs.core.seq(arglist__16987);
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
log.cljs$lang$applyTo = (function (arglist__16988){
var mesg = cljs.core.seq(arglist__16988);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16989){
var contents = cljs.core.seq(arglist__16989);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16990_SHARP_){return p1__16990_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__16991_SHARP_,p2__16992_SHARP_){return goog.dom.insertChildAt(p1__16991_SHARP_,p2__16992_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__16991_SHARP_,p2__16992_SHARP_){return goog.dom.insertChildAt(p1__16991_SHARP_,p2__16992_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__16994_SHARP_,p2__16993_SHARP_){return goog.dom.insertSiblingBefore(p2__16993_SHARP_,p1__16994_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__16994_SHARP_,p2__16993_SHARP_){return goog.dom.insertSiblingBefore(p2__16993_SHARP_,p1__16994_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__16996_SHARP_,p2__16995_SHARP_){return goog.dom.insertSiblingAfter(p2__16995_SHARP_,p1__16996_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__16996_SHARP_,p2__16995_SHARP_){return goog.dom.insertSiblingAfter(p2__16995_SHARP_,p1__16996_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__16998_SHARP_,p2__16997_SHARP_){return goog.dom.replaceNode(p2__16997_SHARP_,p1__16998_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__16998_SHARP_,p2__16997_SHARP_){return goog.dom.replaceNode(p2__16997_SHARP_,p1__16998_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17003_17007 = cljs.core.seq(domina.nodes(content));var chunk__17004_17008 = null;var count__17005_17009 = 0;var i__17006_17010 = 0;while(true){
if((i__17006_17010 < count__17005_17009))
{var n_17011 = chunk__17004_17008.cljs$core$IIndexed$_nth$arity$2(null,i__17006_17010);goog.style.setStyle(n_17011,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17012 = seq__17003_17007;
var G__17013 = chunk__17004_17008;
var G__17014 = count__17005_17009;
var G__17015 = (i__17006_17010 + 1);
seq__17003_17007 = G__17012;
chunk__17004_17008 = G__17013;
count__17005_17009 = G__17014;
i__17006_17010 = G__17015;
continue;
}
} else
{var temp__4092__auto___17016 = cljs.core.seq(seq__17003_17007);if(temp__4092__auto___17016)
{var seq__17003_17017__$1 = temp__4092__auto___17016;if(cljs.core.chunked_seq_QMARK_(seq__17003_17017__$1))
{var c__4148__auto___17018 = cljs.core.chunk_first(seq__17003_17017__$1);{
var G__17019 = cljs.core.chunk_rest(seq__17003_17017__$1);
var G__17020 = c__4148__auto___17018;
var G__17021 = cljs.core.count(c__4148__auto___17018);
var G__17022 = 0;
seq__17003_17007 = G__17019;
chunk__17004_17008 = G__17020;
count__17005_17009 = G__17021;
i__17006_17010 = G__17022;
continue;
}
} else
{var n_17023 = cljs.core.first(seq__17003_17017__$1);goog.style.setStyle(n_17023,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17024 = cljs.core.next(seq__17003_17017__$1);
var G__17025 = null;
var G__17026 = 0;
var G__17027 = 0;
seq__17003_17007 = G__17024;
chunk__17004_17008 = G__17025;
count__17005_17009 = G__17026;
i__17006_17010 = G__17027;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17028){
var content = cljs.core.first(arglist__17028);
arglist__17028 = cljs.core.next(arglist__17028);
var name = cljs.core.first(arglist__17028);
var value = cljs.core.rest(arglist__17028);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17033_17037 = cljs.core.seq(domina.nodes(content));var chunk__17034_17038 = null;var count__17035_17039 = 0;var i__17036_17040 = 0;while(true){
if((i__17036_17040 < count__17035_17039))
{var n_17041 = chunk__17034_17038.cljs$core$IIndexed$_nth$arity$2(null,i__17036_17040);n_17041.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17042 = seq__17033_17037;
var G__17043 = chunk__17034_17038;
var G__17044 = count__17035_17039;
var G__17045 = (i__17036_17040 + 1);
seq__17033_17037 = G__17042;
chunk__17034_17038 = G__17043;
count__17035_17039 = G__17044;
i__17036_17040 = G__17045;
continue;
}
} else
{var temp__4092__auto___17046 = cljs.core.seq(seq__17033_17037);if(temp__4092__auto___17046)
{var seq__17033_17047__$1 = temp__4092__auto___17046;if(cljs.core.chunked_seq_QMARK_(seq__17033_17047__$1))
{var c__4148__auto___17048 = cljs.core.chunk_first(seq__17033_17047__$1);{
var G__17049 = cljs.core.chunk_rest(seq__17033_17047__$1);
var G__17050 = c__4148__auto___17048;
var G__17051 = cljs.core.count(c__4148__auto___17048);
var G__17052 = 0;
seq__17033_17037 = G__17049;
chunk__17034_17038 = G__17050;
count__17035_17039 = G__17051;
i__17036_17040 = G__17052;
continue;
}
} else
{var n_17053 = cljs.core.first(seq__17033_17047__$1);n_17053.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__17054 = cljs.core.next(seq__17033_17047__$1);
var G__17055 = null;
var G__17056 = 0;
var G__17057 = 0;
seq__17033_17037 = G__17054;
chunk__17034_17038 = G__17055;
count__17035_17039 = G__17056;
i__17036_17040 = G__17057;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17058){
var content = cljs.core.first(arglist__17058);
arglist__17058 = cljs.core.next(arglist__17058);
var name = cljs.core.first(arglist__17058);
var value = cljs.core.rest(arglist__17058);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17063_17067 = cljs.core.seq(domina.nodes(content));var chunk__17064_17068 = null;var count__17065_17069 = 0;var i__17066_17070 = 0;while(true){
if((i__17066_17070 < count__17065_17069))
{var n_17071 = chunk__17064_17068.cljs$core$IIndexed$_nth$arity$2(null,i__17066_17070);n_17071.removeAttribute(cljs.core.name(name));
{
var G__17072 = seq__17063_17067;
var G__17073 = chunk__17064_17068;
var G__17074 = count__17065_17069;
var G__17075 = (i__17066_17070 + 1);
seq__17063_17067 = G__17072;
chunk__17064_17068 = G__17073;
count__17065_17069 = G__17074;
i__17066_17070 = G__17075;
continue;
}
} else
{var temp__4092__auto___17076 = cljs.core.seq(seq__17063_17067);if(temp__4092__auto___17076)
{var seq__17063_17077__$1 = temp__4092__auto___17076;if(cljs.core.chunked_seq_QMARK_(seq__17063_17077__$1))
{var c__4148__auto___17078 = cljs.core.chunk_first(seq__17063_17077__$1);{
var G__17079 = cljs.core.chunk_rest(seq__17063_17077__$1);
var G__17080 = c__4148__auto___17078;
var G__17081 = cljs.core.count(c__4148__auto___17078);
var G__17082 = 0;
seq__17063_17067 = G__17079;
chunk__17064_17068 = G__17080;
count__17065_17069 = G__17081;
i__17066_17070 = G__17082;
continue;
}
} else
{var n_17083 = cljs.core.first(seq__17063_17077__$1);n_17083.removeAttribute(cljs.core.name(name));
{
var G__17084 = cljs.core.next(seq__17063_17077__$1);
var G__17085 = null;
var G__17086 = 0;
var G__17087 = 0;
seq__17063_17067 = G__17084;
chunk__17064_17068 = G__17085;
count__17065_17069 = G__17086;
i__17066_17070 = G__17087;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__17089 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17089,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17089,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17090_SHARP_){var attr = attrs__$1.item(p1__17090_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17097_17103 = cljs.core.seq(styles);var chunk__17098_17104 = null;var count__17099_17105 = 0;var i__17100_17106 = 0;while(true){
if((i__17100_17106 < count__17099_17105))
{var vec__17101_17107 = chunk__17098_17104.cljs$core$IIndexed$_nth$arity$2(null,i__17100_17106);var name_17108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17101_17107,0,null);var value_17109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17101_17107,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17108,cljs.core.array_seq([value_17109], 0));
{
var G__17110 = seq__17097_17103;
var G__17111 = chunk__17098_17104;
var G__17112 = count__17099_17105;
var G__17113 = (i__17100_17106 + 1);
seq__17097_17103 = G__17110;
chunk__17098_17104 = G__17111;
count__17099_17105 = G__17112;
i__17100_17106 = G__17113;
continue;
}
} else
{var temp__4092__auto___17114 = cljs.core.seq(seq__17097_17103);if(temp__4092__auto___17114)
{var seq__17097_17115__$1 = temp__4092__auto___17114;if(cljs.core.chunked_seq_QMARK_(seq__17097_17115__$1))
{var c__4148__auto___17116 = cljs.core.chunk_first(seq__17097_17115__$1);{
var G__17117 = cljs.core.chunk_rest(seq__17097_17115__$1);
var G__17118 = c__4148__auto___17116;
var G__17119 = cljs.core.count(c__4148__auto___17116);
var G__17120 = 0;
seq__17097_17103 = G__17117;
chunk__17098_17104 = G__17118;
count__17099_17105 = G__17119;
i__17100_17106 = G__17120;
continue;
}
} else
{var vec__17102_17121 = cljs.core.first(seq__17097_17115__$1);var name_17122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17102_17121,0,null);var value_17123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17102_17121,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17122,cljs.core.array_seq([value_17123], 0));
{
var G__17124 = cljs.core.next(seq__17097_17115__$1);
var G__17125 = null;
var G__17126 = 0;
var G__17127 = 0;
seq__17097_17103 = G__17124;
chunk__17098_17104 = G__17125;
count__17099_17105 = G__17126;
i__17100_17106 = G__17127;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17134_17140 = cljs.core.seq(attrs);var chunk__17135_17141 = null;var count__17136_17142 = 0;var i__17137_17143 = 0;while(true){
if((i__17137_17143 < count__17136_17142))
{var vec__17138_17144 = chunk__17135_17141.cljs$core$IIndexed$_nth$arity$2(null,i__17137_17143);var name_17145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138_17144,0,null);var value_17146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138_17144,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17145,cljs.core.array_seq([value_17146], 0));
{
var G__17147 = seq__17134_17140;
var G__17148 = chunk__17135_17141;
var G__17149 = count__17136_17142;
var G__17150 = (i__17137_17143 + 1);
seq__17134_17140 = G__17147;
chunk__17135_17141 = G__17148;
count__17136_17142 = G__17149;
i__17137_17143 = G__17150;
continue;
}
} else
{var temp__4092__auto___17151 = cljs.core.seq(seq__17134_17140);if(temp__4092__auto___17151)
{var seq__17134_17152__$1 = temp__4092__auto___17151;if(cljs.core.chunked_seq_QMARK_(seq__17134_17152__$1))
{var c__4148__auto___17153 = cljs.core.chunk_first(seq__17134_17152__$1);{
var G__17154 = cljs.core.chunk_rest(seq__17134_17152__$1);
var G__17155 = c__4148__auto___17153;
var G__17156 = cljs.core.count(c__4148__auto___17153);
var G__17157 = 0;
seq__17134_17140 = G__17154;
chunk__17135_17141 = G__17155;
count__17136_17142 = G__17156;
i__17137_17143 = G__17157;
continue;
}
} else
{var vec__17139_17158 = cljs.core.first(seq__17134_17152__$1);var name_17159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17139_17158,0,null);var value_17160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17139_17158,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_17159,cljs.core.array_seq([value_17160], 0));
{
var G__17161 = cljs.core.next(seq__17134_17152__$1);
var G__17162 = null;
var G__17163 = 0;
var G__17164 = 0;
seq__17134_17140 = G__17161;
chunk__17135_17141 = G__17162;
count__17136_17142 = G__17163;
i__17137_17143 = G__17164;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17169_17173 = cljs.core.seq(domina.nodes(content));var chunk__17170_17174 = null;var count__17171_17175 = 0;var i__17172_17176 = 0;while(true){
if((i__17172_17176 < count__17171_17175))
{var node_17177 = chunk__17170_17174.cljs$core$IIndexed$_nth$arity$2(null,i__17172_17176);goog.dom.classes.add(node_17177,class$);
{
var G__17178 = seq__17169_17173;
var G__17179 = chunk__17170_17174;
var G__17180 = count__17171_17175;
var G__17181 = (i__17172_17176 + 1);
seq__17169_17173 = G__17178;
chunk__17170_17174 = G__17179;
count__17171_17175 = G__17180;
i__17172_17176 = G__17181;
continue;
}
} else
{var temp__4092__auto___17182 = cljs.core.seq(seq__17169_17173);if(temp__4092__auto___17182)
{var seq__17169_17183__$1 = temp__4092__auto___17182;if(cljs.core.chunked_seq_QMARK_(seq__17169_17183__$1))
{var c__4148__auto___17184 = cljs.core.chunk_first(seq__17169_17183__$1);{
var G__17185 = cljs.core.chunk_rest(seq__17169_17183__$1);
var G__17186 = c__4148__auto___17184;
var G__17187 = cljs.core.count(c__4148__auto___17184);
var G__17188 = 0;
seq__17169_17173 = G__17185;
chunk__17170_17174 = G__17186;
count__17171_17175 = G__17187;
i__17172_17176 = G__17188;
continue;
}
} else
{var node_17189 = cljs.core.first(seq__17169_17183__$1);goog.dom.classes.add(node_17189,class$);
{
var G__17190 = cljs.core.next(seq__17169_17183__$1);
var G__17191 = null;
var G__17192 = 0;
var G__17193 = 0;
seq__17169_17173 = G__17190;
chunk__17170_17174 = G__17191;
count__17171_17175 = G__17192;
i__17172_17176 = G__17193;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17198_17202 = cljs.core.seq(domina.nodes(content));var chunk__17199_17203 = null;var count__17200_17204 = 0;var i__17201_17205 = 0;while(true){
if((i__17201_17205 < count__17200_17204))
{var node_17206 = chunk__17199_17203.cljs$core$IIndexed$_nth$arity$2(null,i__17201_17205);goog.dom.classes.remove(node_17206,class$);
{
var G__17207 = seq__17198_17202;
var G__17208 = chunk__17199_17203;
var G__17209 = count__17200_17204;
var G__17210 = (i__17201_17205 + 1);
seq__17198_17202 = G__17207;
chunk__17199_17203 = G__17208;
count__17200_17204 = G__17209;
i__17201_17205 = G__17210;
continue;
}
} else
{var temp__4092__auto___17211 = cljs.core.seq(seq__17198_17202);if(temp__4092__auto___17211)
{var seq__17198_17212__$1 = temp__4092__auto___17211;if(cljs.core.chunked_seq_QMARK_(seq__17198_17212__$1))
{var c__4148__auto___17213 = cljs.core.chunk_first(seq__17198_17212__$1);{
var G__17214 = cljs.core.chunk_rest(seq__17198_17212__$1);
var G__17215 = c__4148__auto___17213;
var G__17216 = cljs.core.count(c__4148__auto___17213);
var G__17217 = 0;
seq__17198_17202 = G__17214;
chunk__17199_17203 = G__17215;
count__17200_17204 = G__17216;
i__17201_17205 = G__17217;
continue;
}
} else
{var node_17218 = cljs.core.first(seq__17198_17212__$1);goog.dom.classes.remove(node_17218,class$);
{
var G__17219 = cljs.core.next(seq__17198_17212__$1);
var G__17220 = null;
var G__17221 = 0;
var G__17222 = 0;
seq__17198_17202 = G__17219;
chunk__17199_17203 = G__17220;
count__17200_17204 = G__17221;
i__17201_17205 = G__17222;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17227_17231 = cljs.core.seq(domina.nodes(content));var chunk__17228_17232 = null;var count__17229_17233 = 0;var i__17230_17234 = 0;while(true){
if((i__17230_17234 < count__17229_17233))
{var node_17235 = chunk__17228_17232.cljs$core$IIndexed$_nth$arity$2(null,i__17230_17234);goog.dom.classes.toggle(node_17235,class$);
{
var G__17236 = seq__17227_17231;
var G__17237 = chunk__17228_17232;
var G__17238 = count__17229_17233;
var G__17239 = (i__17230_17234 + 1);
seq__17227_17231 = G__17236;
chunk__17228_17232 = G__17237;
count__17229_17233 = G__17238;
i__17230_17234 = G__17239;
continue;
}
} else
{var temp__4092__auto___17240 = cljs.core.seq(seq__17227_17231);if(temp__4092__auto___17240)
{var seq__17227_17241__$1 = temp__4092__auto___17240;if(cljs.core.chunked_seq_QMARK_(seq__17227_17241__$1))
{var c__4148__auto___17242 = cljs.core.chunk_first(seq__17227_17241__$1);{
var G__17243 = cljs.core.chunk_rest(seq__17227_17241__$1);
var G__17244 = c__4148__auto___17242;
var G__17245 = cljs.core.count(c__4148__auto___17242);
var G__17246 = 0;
seq__17227_17231 = G__17243;
chunk__17228_17232 = G__17244;
count__17229_17233 = G__17245;
i__17230_17234 = G__17246;
continue;
}
} else
{var node_17247 = cljs.core.first(seq__17227_17241__$1);goog.dom.classes.toggle(node_17247,class$);
{
var G__17248 = cljs.core.next(seq__17227_17241__$1);
var G__17249 = null;
var G__17250 = 0;
var G__17251 = 0;
seq__17227_17231 = G__17248;
chunk__17228_17232 = G__17249;
count__17229_17233 = G__17250;
i__17230_17234 = G__17251;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17260__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__17256_17261 = cljs.core.seq(domina.nodes(content));var chunk__17257_17262 = null;var count__17258_17263 = 0;var i__17259_17264 = 0;while(true){
if((i__17259_17264 < count__17258_17263))
{var node_17265 = chunk__17257_17262.cljs$core$IIndexed$_nth$arity$2(null,i__17259_17264);goog.dom.classes.set(node_17265,classes_17260__$1);
{
var G__17266 = seq__17256_17261;
var G__17267 = chunk__17257_17262;
var G__17268 = count__17258_17263;
var G__17269 = (i__17259_17264 + 1);
seq__17256_17261 = G__17266;
chunk__17257_17262 = G__17267;
count__17258_17263 = G__17268;
i__17259_17264 = G__17269;
continue;
}
} else
{var temp__4092__auto___17270 = cljs.core.seq(seq__17256_17261);if(temp__4092__auto___17270)
{var seq__17256_17271__$1 = temp__4092__auto___17270;if(cljs.core.chunked_seq_QMARK_(seq__17256_17271__$1))
{var c__4148__auto___17272 = cljs.core.chunk_first(seq__17256_17271__$1);{
var G__17273 = cljs.core.chunk_rest(seq__17256_17271__$1);
var G__17274 = c__4148__auto___17272;
var G__17275 = cljs.core.count(c__4148__auto___17272);
var G__17276 = 0;
seq__17256_17261 = G__17273;
chunk__17257_17262 = G__17274;
count__17258_17263 = G__17275;
i__17259_17264 = G__17276;
continue;
}
} else
{var node_17277 = cljs.core.first(seq__17256_17271__$1);goog.dom.classes.set(node_17277,classes_17260__$1);
{
var G__17278 = cljs.core.next(seq__17256_17271__$1);
var G__17279 = null;
var G__17280 = 0;
var G__17281 = 0;
seq__17256_17261 = G__17278;
chunk__17257_17262 = G__17279;
count__17258_17263 = G__17280;
i__17259_17264 = G__17281;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17286_17290 = cljs.core.seq(domina.nodes(content));var chunk__17287_17291 = null;var count__17288_17292 = 0;var i__17289_17293 = 0;while(true){
if((i__17289_17293 < count__17288_17292))
{var node_17294 = chunk__17287_17291.cljs$core$IIndexed$_nth$arity$2(null,i__17289_17293);goog.dom.setTextContent(node_17294,value);
{
var G__17295 = seq__17286_17290;
var G__17296 = chunk__17287_17291;
var G__17297 = count__17288_17292;
var G__17298 = (i__17289_17293 + 1);
seq__17286_17290 = G__17295;
chunk__17287_17291 = G__17296;
count__17288_17292 = G__17297;
i__17289_17293 = G__17298;
continue;
}
} else
{var temp__4092__auto___17299 = cljs.core.seq(seq__17286_17290);if(temp__4092__auto___17299)
{var seq__17286_17300__$1 = temp__4092__auto___17299;if(cljs.core.chunked_seq_QMARK_(seq__17286_17300__$1))
{var c__4148__auto___17301 = cljs.core.chunk_first(seq__17286_17300__$1);{
var G__17302 = cljs.core.chunk_rest(seq__17286_17300__$1);
var G__17303 = c__4148__auto___17301;
var G__17304 = cljs.core.count(c__4148__auto___17301);
var G__17305 = 0;
seq__17286_17290 = G__17302;
chunk__17287_17291 = G__17303;
count__17288_17292 = G__17304;
i__17289_17293 = G__17305;
continue;
}
} else
{var node_17306 = cljs.core.first(seq__17286_17300__$1);goog.dom.setTextContent(node_17306,value);
{
var G__17307 = cljs.core.next(seq__17286_17300__$1);
var G__17308 = null;
var G__17309 = 0;
var G__17310 = 0;
seq__17286_17290 = G__17307;
chunk__17287_17291 = G__17308;
count__17288_17292 = G__17309;
i__17289_17293 = G__17310;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17315_17319 = cljs.core.seq(domina.nodes(content));var chunk__17316_17320 = null;var count__17317_17321 = 0;var i__17318_17322 = 0;while(true){
if((i__17318_17322 < count__17317_17321))
{var node_17323 = chunk__17316_17320.cljs$core$IIndexed$_nth$arity$2(null,i__17318_17322);goog.dom.forms.setValue(node_17323,value);
{
var G__17324 = seq__17315_17319;
var G__17325 = chunk__17316_17320;
var G__17326 = count__17317_17321;
var G__17327 = (i__17318_17322 + 1);
seq__17315_17319 = G__17324;
chunk__17316_17320 = G__17325;
count__17317_17321 = G__17326;
i__17318_17322 = G__17327;
continue;
}
} else
{var temp__4092__auto___17328 = cljs.core.seq(seq__17315_17319);if(temp__4092__auto___17328)
{var seq__17315_17329__$1 = temp__4092__auto___17328;if(cljs.core.chunked_seq_QMARK_(seq__17315_17329__$1))
{var c__4148__auto___17330 = cljs.core.chunk_first(seq__17315_17329__$1);{
var G__17331 = cljs.core.chunk_rest(seq__17315_17329__$1);
var G__17332 = c__4148__auto___17330;
var G__17333 = cljs.core.count(c__4148__auto___17330);
var G__17334 = 0;
seq__17315_17319 = G__17331;
chunk__17316_17320 = G__17332;
count__17317_17321 = G__17333;
i__17318_17322 = G__17334;
continue;
}
} else
{var node_17335 = cljs.core.first(seq__17315_17329__$1);goog.dom.forms.setValue(node_17335,value);
{
var G__17336 = cljs.core.next(seq__17315_17329__$1);
var G__17337 = null;
var G__17338 = 0;
var G__17339 = 0;
seq__17315_17319 = G__17336;
chunk__17316_17320 = G__17337;
count__17317_17321 = G__17338;
i__17318_17322 = G__17339;
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
{var value_17350 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17346_17351 = cljs.core.seq(domina.nodes(content));var chunk__17347_17352 = null;var count__17348_17353 = 0;var i__17349_17354 = 0;while(true){
if((i__17349_17354 < count__17348_17353))
{var node_17355 = chunk__17347_17352.cljs$core$IIndexed$_nth$arity$2(null,i__17349_17354);node_17355.innerHTML = value_17350;
{
var G__17356 = seq__17346_17351;
var G__17357 = chunk__17347_17352;
var G__17358 = count__17348_17353;
var G__17359 = (i__17349_17354 + 1);
seq__17346_17351 = G__17356;
chunk__17347_17352 = G__17357;
count__17348_17353 = G__17358;
i__17349_17354 = G__17359;
continue;
}
} else
{var temp__4092__auto___17360 = cljs.core.seq(seq__17346_17351);if(temp__4092__auto___17360)
{var seq__17346_17361__$1 = temp__4092__auto___17360;if(cljs.core.chunked_seq_QMARK_(seq__17346_17361__$1))
{var c__4148__auto___17362 = cljs.core.chunk_first(seq__17346_17361__$1);{
var G__17363 = cljs.core.chunk_rest(seq__17346_17361__$1);
var G__17364 = c__4148__auto___17362;
var G__17365 = cljs.core.count(c__4148__auto___17362);
var G__17366 = 0;
seq__17346_17351 = G__17363;
chunk__17347_17352 = G__17364;
count__17348_17353 = G__17365;
i__17349_17354 = G__17366;
continue;
}
} else
{var node_17367 = cljs.core.first(seq__17346_17361__$1);node_17367.innerHTML = value_17350;
{
var G__17368 = cljs.core.next(seq__17346_17361__$1);
var G__17369 = null;
var G__17370 = 0;
var G__17371 = 0;
seq__17346_17351 = G__17368;
chunk__17347_17352 = G__17369;
count__17348_17353 = G__17370;
i__17349_17354 = G__17371;
continue;
}
}
} else
{}
}
break;
}
}catch (e17345){if((e17345 instanceof Error))
{var e_17372 = e17345;domina.replace_children_BANG_(content,value_17350);
} else
{if(cljs.core.constant$keyword$6)
{throw e17345;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17379_17383 = cljs.core.seq(children);var chunk__17380_17384 = null;var count__17381_17385 = 0;var i__17382_17386 = 0;while(true){
if((i__17382_17386 < count__17381_17385))
{var child_17387 = chunk__17380_17384.cljs$core$IIndexed$_nth$arity$2(null,i__17382_17386);frag.appendChild(child_17387);
{
var G__17388 = seq__17379_17383;
var G__17389 = chunk__17380_17384;
var G__17390 = count__17381_17385;
var G__17391 = (i__17382_17386 + 1);
seq__17379_17383 = G__17388;
chunk__17380_17384 = G__17389;
count__17381_17385 = G__17390;
i__17382_17386 = G__17391;
continue;
}
} else
{var temp__4092__auto___17392 = cljs.core.seq(seq__17379_17383);if(temp__4092__auto___17392)
{var seq__17379_17393__$1 = temp__4092__auto___17392;if(cljs.core.chunked_seq_QMARK_(seq__17379_17393__$1))
{var c__4148__auto___17394 = cljs.core.chunk_first(seq__17379_17393__$1);{
var G__17395 = cljs.core.chunk_rest(seq__17379_17393__$1);
var G__17396 = c__4148__auto___17394;
var G__17397 = cljs.core.count(c__4148__auto___17394);
var G__17398 = 0;
seq__17379_17383 = G__17395;
chunk__17380_17384 = G__17396;
count__17381_17385 = G__17397;
i__17382_17386 = G__17398;
continue;
}
} else
{var child_17399 = cljs.core.first(seq__17379_17393__$1);frag.appendChild(child_17399);
{
var G__17400 = cljs.core.next(seq__17379_17393__$1);
var G__17401 = null;
var G__17402 = 0;
var G__17403 = 0;
seq__17379_17383 = G__17400;
chunk__17380_17384 = G__17401;
count__17381_17385 = G__17402;
i__17382_17386 = G__17403;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__17373_SHARP_,p2__17374_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__17373_SHARP_,p2__17374_SHARP_) : f.call(null,p1__17373_SHARP_,p2__17374_SHARP_));
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
{if((function (){var G__17405 = list_thing;if(G__17405)
{var bit__4050__auto__ = (G__17405.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17405.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17405.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17405);
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
{if((function (){var G__17406 = content;if(G__17406)
{var bit__4050__auto__ = (G__17406.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17406.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17406.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17406);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17406);
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
{if((function (){var G__17407 = content;if(G__17407)
{var bit__4050__auto__ = (G__17407.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17407.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17407);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__17407);
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
