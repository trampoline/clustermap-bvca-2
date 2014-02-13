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
var opt_wrapper_26963 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26964 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26965 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$214,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26964,table_section_wrapper_26964,opt_wrapper_26963,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26965,table_section_wrapper_26964,cell_wrapper_26965,opt_wrapper_26963,table_section_wrapper_26964,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26964]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26970 = cljs.core.seq(tbody);var chunk__26971 = null;var count__26972 = 0;var i__26973 = 0;while(true){
if((i__26973 < count__26972))
{var child = chunk__26971.cljs$core$IIndexed$_nth$arity$2(null,i__26973);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26974 = seq__26970;
var G__26975 = chunk__26971;
var G__26976 = count__26972;
var G__26977 = (i__26973 + 1);
seq__26970 = G__26974;
chunk__26971 = G__26975;
count__26972 = G__26976;
i__26973 = G__26977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26970);if(temp__4092__auto__)
{var seq__26970__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26970__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26970__$1);{
var G__26978 = cljs.core.chunk_rest(seq__26970__$1);
var G__26979 = c__4148__auto__;
var G__26980 = cljs.core.count(c__4148__auto__);
var G__26981 = 0;
seq__26970 = G__26978;
chunk__26971 = G__26979;
count__26972 = G__26980;
i__26973 = G__26981;
continue;
}
} else
{var child = cljs.core.first(seq__26970__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26982 = cljs.core.next(seq__26970__$1);
var G__26983 = null;
var G__26984 = 0;
var G__26985 = 0;
seq__26970 = G__26982;
chunk__26971 = G__26983;
count__26972 = G__26984;
i__26973 = G__26985;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26987 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26988 = wrapper.lastChild;
var G__26989 = (level - 1);
wrapper = G__26988;
level = G__26989;
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
domina.DomContent = (function (){var obj26991 = {};return obj26991;
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
log_debug.cljs$lang$applyTo = (function (arglist__26992){
var mesg = cljs.core.seq(arglist__26992);
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
log.cljs$lang$applyTo = (function (arglist__26993){
var mesg = cljs.core.seq(arglist__26993);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26994){
var contents = cljs.core.seq(arglist__26994);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26995_SHARP_){return p1__26995_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26996_SHARP_,p2__26997_SHARP_){return goog.dom.insertChildAt(p1__26996_SHARP_,p2__26997_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26996_SHARP_,p2__26997_SHARP_){return goog.dom.insertChildAt(p1__26996_SHARP_,p2__26997_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26999_SHARP_,p2__26998_SHARP_){return goog.dom.insertSiblingBefore(p2__26998_SHARP_,p1__26999_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26999_SHARP_,p2__26998_SHARP_){return goog.dom.insertSiblingBefore(p2__26998_SHARP_,p1__26999_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27001_SHARP_,p2__27000_SHARP_){return goog.dom.insertSiblingAfter(p2__27000_SHARP_,p1__27001_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27001_SHARP_,p2__27000_SHARP_){return goog.dom.insertSiblingAfter(p2__27000_SHARP_,p1__27001_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27003_SHARP_,p2__27002_SHARP_){return goog.dom.replaceNode(p2__27002_SHARP_,p1__27003_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27003_SHARP_,p2__27002_SHARP_){return goog.dom.replaceNode(p2__27002_SHARP_,p1__27003_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27008_27012 = cljs.core.seq(domina.nodes(content));var chunk__27009_27013 = null;var count__27010_27014 = 0;var i__27011_27015 = 0;while(true){
if((i__27011_27015 < count__27010_27014))
{var n_27016 = chunk__27009_27013.cljs$core$IIndexed$_nth$arity$2(null,i__27011_27015);goog.style.setStyle(n_27016,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27017 = seq__27008_27012;
var G__27018 = chunk__27009_27013;
var G__27019 = count__27010_27014;
var G__27020 = (i__27011_27015 + 1);
seq__27008_27012 = G__27017;
chunk__27009_27013 = G__27018;
count__27010_27014 = G__27019;
i__27011_27015 = G__27020;
continue;
}
} else
{var temp__4092__auto___27021 = cljs.core.seq(seq__27008_27012);if(temp__4092__auto___27021)
{var seq__27008_27022__$1 = temp__4092__auto___27021;if(cljs.core.chunked_seq_QMARK_(seq__27008_27022__$1))
{var c__4148__auto___27023 = cljs.core.chunk_first(seq__27008_27022__$1);{
var G__27024 = cljs.core.chunk_rest(seq__27008_27022__$1);
var G__27025 = c__4148__auto___27023;
var G__27026 = cljs.core.count(c__4148__auto___27023);
var G__27027 = 0;
seq__27008_27012 = G__27024;
chunk__27009_27013 = G__27025;
count__27010_27014 = G__27026;
i__27011_27015 = G__27027;
continue;
}
} else
{var n_27028 = cljs.core.first(seq__27008_27022__$1);goog.style.setStyle(n_27028,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27029 = cljs.core.next(seq__27008_27022__$1);
var G__27030 = null;
var G__27031 = 0;
var G__27032 = 0;
seq__27008_27012 = G__27029;
chunk__27009_27013 = G__27030;
count__27010_27014 = G__27031;
i__27011_27015 = G__27032;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27033){
var content = cljs.core.first(arglist__27033);
arglist__27033 = cljs.core.next(arglist__27033);
var name = cljs.core.first(arglist__27033);
var value = cljs.core.rest(arglist__27033);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27038_27042 = cljs.core.seq(domina.nodes(content));var chunk__27039_27043 = null;var count__27040_27044 = 0;var i__27041_27045 = 0;while(true){
if((i__27041_27045 < count__27040_27044))
{var n_27046 = chunk__27039_27043.cljs$core$IIndexed$_nth$arity$2(null,i__27041_27045);n_27046.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27047 = seq__27038_27042;
var G__27048 = chunk__27039_27043;
var G__27049 = count__27040_27044;
var G__27050 = (i__27041_27045 + 1);
seq__27038_27042 = G__27047;
chunk__27039_27043 = G__27048;
count__27040_27044 = G__27049;
i__27041_27045 = G__27050;
continue;
}
} else
{var temp__4092__auto___27051 = cljs.core.seq(seq__27038_27042);if(temp__4092__auto___27051)
{var seq__27038_27052__$1 = temp__4092__auto___27051;if(cljs.core.chunked_seq_QMARK_(seq__27038_27052__$1))
{var c__4148__auto___27053 = cljs.core.chunk_first(seq__27038_27052__$1);{
var G__27054 = cljs.core.chunk_rest(seq__27038_27052__$1);
var G__27055 = c__4148__auto___27053;
var G__27056 = cljs.core.count(c__4148__auto___27053);
var G__27057 = 0;
seq__27038_27042 = G__27054;
chunk__27039_27043 = G__27055;
count__27040_27044 = G__27056;
i__27041_27045 = G__27057;
continue;
}
} else
{var n_27058 = cljs.core.first(seq__27038_27052__$1);n_27058.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27059 = cljs.core.next(seq__27038_27052__$1);
var G__27060 = null;
var G__27061 = 0;
var G__27062 = 0;
seq__27038_27042 = G__27059;
chunk__27039_27043 = G__27060;
count__27040_27044 = G__27061;
i__27041_27045 = G__27062;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27063){
var content = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var name = cljs.core.first(arglist__27063);
var value = cljs.core.rest(arglist__27063);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27068_27072 = cljs.core.seq(domina.nodes(content));var chunk__27069_27073 = null;var count__27070_27074 = 0;var i__27071_27075 = 0;while(true){
if((i__27071_27075 < count__27070_27074))
{var n_27076 = chunk__27069_27073.cljs$core$IIndexed$_nth$arity$2(null,i__27071_27075);n_27076.removeAttribute(cljs.core.name(name));
{
var G__27077 = seq__27068_27072;
var G__27078 = chunk__27069_27073;
var G__27079 = count__27070_27074;
var G__27080 = (i__27071_27075 + 1);
seq__27068_27072 = G__27077;
chunk__27069_27073 = G__27078;
count__27070_27074 = G__27079;
i__27071_27075 = G__27080;
continue;
}
} else
{var temp__4092__auto___27081 = cljs.core.seq(seq__27068_27072);if(temp__4092__auto___27081)
{var seq__27068_27082__$1 = temp__4092__auto___27081;if(cljs.core.chunked_seq_QMARK_(seq__27068_27082__$1))
{var c__4148__auto___27083 = cljs.core.chunk_first(seq__27068_27082__$1);{
var G__27084 = cljs.core.chunk_rest(seq__27068_27082__$1);
var G__27085 = c__4148__auto___27083;
var G__27086 = cljs.core.count(c__4148__auto___27083);
var G__27087 = 0;
seq__27068_27072 = G__27084;
chunk__27069_27073 = G__27085;
count__27070_27074 = G__27086;
i__27071_27075 = G__27087;
continue;
}
} else
{var n_27088 = cljs.core.first(seq__27068_27082__$1);n_27088.removeAttribute(cljs.core.name(name));
{
var G__27089 = cljs.core.next(seq__27068_27082__$1);
var G__27090 = null;
var G__27091 = 0;
var G__27092 = 0;
seq__27068_27072 = G__27089;
chunk__27069_27073 = G__27090;
count__27070_27074 = G__27091;
i__27071_27075 = G__27092;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27094 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$213)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27095_SHARP_){var attr = attrs__$1.item(p1__27095_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27102_27108 = cljs.core.seq(styles);var chunk__27103_27109 = null;var count__27104_27110 = 0;var i__27105_27111 = 0;while(true){
if((i__27105_27111 < count__27104_27110))
{var vec__27106_27112 = chunk__27103_27109.cljs$core$IIndexed$_nth$arity$2(null,i__27105_27111);var name_27113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106_27112,0,null);var value_27114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27106_27112,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27113,cljs.core.array_seq([value_27114], 0));
{
var G__27115 = seq__27102_27108;
var G__27116 = chunk__27103_27109;
var G__27117 = count__27104_27110;
var G__27118 = (i__27105_27111 + 1);
seq__27102_27108 = G__27115;
chunk__27103_27109 = G__27116;
count__27104_27110 = G__27117;
i__27105_27111 = G__27118;
continue;
}
} else
{var temp__4092__auto___27119 = cljs.core.seq(seq__27102_27108);if(temp__4092__auto___27119)
{var seq__27102_27120__$1 = temp__4092__auto___27119;if(cljs.core.chunked_seq_QMARK_(seq__27102_27120__$1))
{var c__4148__auto___27121 = cljs.core.chunk_first(seq__27102_27120__$1);{
var G__27122 = cljs.core.chunk_rest(seq__27102_27120__$1);
var G__27123 = c__4148__auto___27121;
var G__27124 = cljs.core.count(c__4148__auto___27121);
var G__27125 = 0;
seq__27102_27108 = G__27122;
chunk__27103_27109 = G__27123;
count__27104_27110 = G__27124;
i__27105_27111 = G__27125;
continue;
}
} else
{var vec__27107_27126 = cljs.core.first(seq__27102_27120__$1);var name_27127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107_27126,0,null);var value_27128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107_27126,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27127,cljs.core.array_seq([value_27128], 0));
{
var G__27129 = cljs.core.next(seq__27102_27120__$1);
var G__27130 = null;
var G__27131 = 0;
var G__27132 = 0;
seq__27102_27108 = G__27129;
chunk__27103_27109 = G__27130;
count__27104_27110 = G__27131;
i__27105_27111 = G__27132;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27139_27145 = cljs.core.seq(attrs);var chunk__27140_27146 = null;var count__27141_27147 = 0;var i__27142_27148 = 0;while(true){
if((i__27142_27148 < count__27141_27147))
{var vec__27143_27149 = chunk__27140_27146.cljs$core$IIndexed$_nth$arity$2(null,i__27142_27148);var name_27150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143_27149,0,null);var value_27151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143_27149,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27150,cljs.core.array_seq([value_27151], 0));
{
var G__27152 = seq__27139_27145;
var G__27153 = chunk__27140_27146;
var G__27154 = count__27141_27147;
var G__27155 = (i__27142_27148 + 1);
seq__27139_27145 = G__27152;
chunk__27140_27146 = G__27153;
count__27141_27147 = G__27154;
i__27142_27148 = G__27155;
continue;
}
} else
{var temp__4092__auto___27156 = cljs.core.seq(seq__27139_27145);if(temp__4092__auto___27156)
{var seq__27139_27157__$1 = temp__4092__auto___27156;if(cljs.core.chunked_seq_QMARK_(seq__27139_27157__$1))
{var c__4148__auto___27158 = cljs.core.chunk_first(seq__27139_27157__$1);{
var G__27159 = cljs.core.chunk_rest(seq__27139_27157__$1);
var G__27160 = c__4148__auto___27158;
var G__27161 = cljs.core.count(c__4148__auto___27158);
var G__27162 = 0;
seq__27139_27145 = G__27159;
chunk__27140_27146 = G__27160;
count__27141_27147 = G__27161;
i__27142_27148 = G__27162;
continue;
}
} else
{var vec__27144_27163 = cljs.core.first(seq__27139_27157__$1);var name_27164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27144_27163,0,null);var value_27165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27144_27163,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27164,cljs.core.array_seq([value_27165], 0));
{
var G__27166 = cljs.core.next(seq__27139_27157__$1);
var G__27167 = null;
var G__27168 = 0;
var G__27169 = 0;
seq__27139_27145 = G__27166;
chunk__27140_27146 = G__27167;
count__27141_27147 = G__27168;
i__27142_27148 = G__27169;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27174_27178 = cljs.core.seq(domina.nodes(content));var chunk__27175_27179 = null;var count__27176_27180 = 0;var i__27177_27181 = 0;while(true){
if((i__27177_27181 < count__27176_27180))
{var node_27182 = chunk__27175_27179.cljs$core$IIndexed$_nth$arity$2(null,i__27177_27181);goog.dom.classes.add(node_27182,class$);
{
var G__27183 = seq__27174_27178;
var G__27184 = chunk__27175_27179;
var G__27185 = count__27176_27180;
var G__27186 = (i__27177_27181 + 1);
seq__27174_27178 = G__27183;
chunk__27175_27179 = G__27184;
count__27176_27180 = G__27185;
i__27177_27181 = G__27186;
continue;
}
} else
{var temp__4092__auto___27187 = cljs.core.seq(seq__27174_27178);if(temp__4092__auto___27187)
{var seq__27174_27188__$1 = temp__4092__auto___27187;if(cljs.core.chunked_seq_QMARK_(seq__27174_27188__$1))
{var c__4148__auto___27189 = cljs.core.chunk_first(seq__27174_27188__$1);{
var G__27190 = cljs.core.chunk_rest(seq__27174_27188__$1);
var G__27191 = c__4148__auto___27189;
var G__27192 = cljs.core.count(c__4148__auto___27189);
var G__27193 = 0;
seq__27174_27178 = G__27190;
chunk__27175_27179 = G__27191;
count__27176_27180 = G__27192;
i__27177_27181 = G__27193;
continue;
}
} else
{var node_27194 = cljs.core.first(seq__27174_27188__$1);goog.dom.classes.add(node_27194,class$);
{
var G__27195 = cljs.core.next(seq__27174_27188__$1);
var G__27196 = null;
var G__27197 = 0;
var G__27198 = 0;
seq__27174_27178 = G__27195;
chunk__27175_27179 = G__27196;
count__27176_27180 = G__27197;
i__27177_27181 = G__27198;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27203_27207 = cljs.core.seq(domina.nodes(content));var chunk__27204_27208 = null;var count__27205_27209 = 0;var i__27206_27210 = 0;while(true){
if((i__27206_27210 < count__27205_27209))
{var node_27211 = chunk__27204_27208.cljs$core$IIndexed$_nth$arity$2(null,i__27206_27210);goog.dom.classes.remove(node_27211,class$);
{
var G__27212 = seq__27203_27207;
var G__27213 = chunk__27204_27208;
var G__27214 = count__27205_27209;
var G__27215 = (i__27206_27210 + 1);
seq__27203_27207 = G__27212;
chunk__27204_27208 = G__27213;
count__27205_27209 = G__27214;
i__27206_27210 = G__27215;
continue;
}
} else
{var temp__4092__auto___27216 = cljs.core.seq(seq__27203_27207);if(temp__4092__auto___27216)
{var seq__27203_27217__$1 = temp__4092__auto___27216;if(cljs.core.chunked_seq_QMARK_(seq__27203_27217__$1))
{var c__4148__auto___27218 = cljs.core.chunk_first(seq__27203_27217__$1);{
var G__27219 = cljs.core.chunk_rest(seq__27203_27217__$1);
var G__27220 = c__4148__auto___27218;
var G__27221 = cljs.core.count(c__4148__auto___27218);
var G__27222 = 0;
seq__27203_27207 = G__27219;
chunk__27204_27208 = G__27220;
count__27205_27209 = G__27221;
i__27206_27210 = G__27222;
continue;
}
} else
{var node_27223 = cljs.core.first(seq__27203_27217__$1);goog.dom.classes.remove(node_27223,class$);
{
var G__27224 = cljs.core.next(seq__27203_27217__$1);
var G__27225 = null;
var G__27226 = 0;
var G__27227 = 0;
seq__27203_27207 = G__27224;
chunk__27204_27208 = G__27225;
count__27205_27209 = G__27226;
i__27206_27210 = G__27227;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27232_27236 = cljs.core.seq(domina.nodes(content));var chunk__27233_27237 = null;var count__27234_27238 = 0;var i__27235_27239 = 0;while(true){
if((i__27235_27239 < count__27234_27238))
{var node_27240 = chunk__27233_27237.cljs$core$IIndexed$_nth$arity$2(null,i__27235_27239);goog.dom.classes.toggle(node_27240,class$);
{
var G__27241 = seq__27232_27236;
var G__27242 = chunk__27233_27237;
var G__27243 = count__27234_27238;
var G__27244 = (i__27235_27239 + 1);
seq__27232_27236 = G__27241;
chunk__27233_27237 = G__27242;
count__27234_27238 = G__27243;
i__27235_27239 = G__27244;
continue;
}
} else
{var temp__4092__auto___27245 = cljs.core.seq(seq__27232_27236);if(temp__4092__auto___27245)
{var seq__27232_27246__$1 = temp__4092__auto___27245;if(cljs.core.chunked_seq_QMARK_(seq__27232_27246__$1))
{var c__4148__auto___27247 = cljs.core.chunk_first(seq__27232_27246__$1);{
var G__27248 = cljs.core.chunk_rest(seq__27232_27246__$1);
var G__27249 = c__4148__auto___27247;
var G__27250 = cljs.core.count(c__4148__auto___27247);
var G__27251 = 0;
seq__27232_27236 = G__27248;
chunk__27233_27237 = G__27249;
count__27234_27238 = G__27250;
i__27235_27239 = G__27251;
continue;
}
} else
{var node_27252 = cljs.core.first(seq__27232_27246__$1);goog.dom.classes.toggle(node_27252,class$);
{
var G__27253 = cljs.core.next(seq__27232_27246__$1);
var G__27254 = null;
var G__27255 = 0;
var G__27256 = 0;
seq__27232_27236 = G__27253;
chunk__27233_27237 = G__27254;
count__27234_27238 = G__27255;
i__27235_27239 = G__27256;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27265__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27261_27266 = cljs.core.seq(domina.nodes(content));var chunk__27262_27267 = null;var count__27263_27268 = 0;var i__27264_27269 = 0;while(true){
if((i__27264_27269 < count__27263_27268))
{var node_27270 = chunk__27262_27267.cljs$core$IIndexed$_nth$arity$2(null,i__27264_27269);goog.dom.classes.set(node_27270,classes_27265__$1);
{
var G__27271 = seq__27261_27266;
var G__27272 = chunk__27262_27267;
var G__27273 = count__27263_27268;
var G__27274 = (i__27264_27269 + 1);
seq__27261_27266 = G__27271;
chunk__27262_27267 = G__27272;
count__27263_27268 = G__27273;
i__27264_27269 = G__27274;
continue;
}
} else
{var temp__4092__auto___27275 = cljs.core.seq(seq__27261_27266);if(temp__4092__auto___27275)
{var seq__27261_27276__$1 = temp__4092__auto___27275;if(cljs.core.chunked_seq_QMARK_(seq__27261_27276__$1))
{var c__4148__auto___27277 = cljs.core.chunk_first(seq__27261_27276__$1);{
var G__27278 = cljs.core.chunk_rest(seq__27261_27276__$1);
var G__27279 = c__4148__auto___27277;
var G__27280 = cljs.core.count(c__4148__auto___27277);
var G__27281 = 0;
seq__27261_27266 = G__27278;
chunk__27262_27267 = G__27279;
count__27263_27268 = G__27280;
i__27264_27269 = G__27281;
continue;
}
} else
{var node_27282 = cljs.core.first(seq__27261_27276__$1);goog.dom.classes.set(node_27282,classes_27265__$1);
{
var G__27283 = cljs.core.next(seq__27261_27276__$1);
var G__27284 = null;
var G__27285 = 0;
var G__27286 = 0;
seq__27261_27266 = G__27283;
chunk__27262_27267 = G__27284;
count__27263_27268 = G__27285;
i__27264_27269 = G__27286;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27291_27295 = cljs.core.seq(domina.nodes(content));var chunk__27292_27296 = null;var count__27293_27297 = 0;var i__27294_27298 = 0;while(true){
if((i__27294_27298 < count__27293_27297))
{var node_27299 = chunk__27292_27296.cljs$core$IIndexed$_nth$arity$2(null,i__27294_27298);goog.dom.setTextContent(node_27299,value);
{
var G__27300 = seq__27291_27295;
var G__27301 = chunk__27292_27296;
var G__27302 = count__27293_27297;
var G__27303 = (i__27294_27298 + 1);
seq__27291_27295 = G__27300;
chunk__27292_27296 = G__27301;
count__27293_27297 = G__27302;
i__27294_27298 = G__27303;
continue;
}
} else
{var temp__4092__auto___27304 = cljs.core.seq(seq__27291_27295);if(temp__4092__auto___27304)
{var seq__27291_27305__$1 = temp__4092__auto___27304;if(cljs.core.chunked_seq_QMARK_(seq__27291_27305__$1))
{var c__4148__auto___27306 = cljs.core.chunk_first(seq__27291_27305__$1);{
var G__27307 = cljs.core.chunk_rest(seq__27291_27305__$1);
var G__27308 = c__4148__auto___27306;
var G__27309 = cljs.core.count(c__4148__auto___27306);
var G__27310 = 0;
seq__27291_27295 = G__27307;
chunk__27292_27296 = G__27308;
count__27293_27297 = G__27309;
i__27294_27298 = G__27310;
continue;
}
} else
{var node_27311 = cljs.core.first(seq__27291_27305__$1);goog.dom.setTextContent(node_27311,value);
{
var G__27312 = cljs.core.next(seq__27291_27305__$1);
var G__27313 = null;
var G__27314 = 0;
var G__27315 = 0;
seq__27291_27295 = G__27312;
chunk__27292_27296 = G__27313;
count__27293_27297 = G__27314;
i__27294_27298 = G__27315;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27320_27324 = cljs.core.seq(domina.nodes(content));var chunk__27321_27325 = null;var count__27322_27326 = 0;var i__27323_27327 = 0;while(true){
if((i__27323_27327 < count__27322_27326))
{var node_27328 = chunk__27321_27325.cljs$core$IIndexed$_nth$arity$2(null,i__27323_27327);goog.dom.forms.setValue(node_27328,value);
{
var G__27329 = seq__27320_27324;
var G__27330 = chunk__27321_27325;
var G__27331 = count__27322_27326;
var G__27332 = (i__27323_27327 + 1);
seq__27320_27324 = G__27329;
chunk__27321_27325 = G__27330;
count__27322_27326 = G__27331;
i__27323_27327 = G__27332;
continue;
}
} else
{var temp__4092__auto___27333 = cljs.core.seq(seq__27320_27324);if(temp__4092__auto___27333)
{var seq__27320_27334__$1 = temp__4092__auto___27333;if(cljs.core.chunked_seq_QMARK_(seq__27320_27334__$1))
{var c__4148__auto___27335 = cljs.core.chunk_first(seq__27320_27334__$1);{
var G__27336 = cljs.core.chunk_rest(seq__27320_27334__$1);
var G__27337 = c__4148__auto___27335;
var G__27338 = cljs.core.count(c__4148__auto___27335);
var G__27339 = 0;
seq__27320_27324 = G__27336;
chunk__27321_27325 = G__27337;
count__27322_27326 = G__27338;
i__27323_27327 = G__27339;
continue;
}
} else
{var node_27340 = cljs.core.first(seq__27320_27334__$1);goog.dom.forms.setValue(node_27340,value);
{
var G__27341 = cljs.core.next(seq__27320_27334__$1);
var G__27342 = null;
var G__27343 = 0;
var G__27344 = 0;
seq__27320_27324 = G__27341;
chunk__27321_27325 = G__27342;
count__27322_27326 = G__27343;
i__27323_27327 = G__27344;
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
{var value_27355 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27351_27356 = cljs.core.seq(domina.nodes(content));var chunk__27352_27357 = null;var count__27353_27358 = 0;var i__27354_27359 = 0;while(true){
if((i__27354_27359 < count__27353_27358))
{var node_27360 = chunk__27352_27357.cljs$core$IIndexed$_nth$arity$2(null,i__27354_27359);node_27360.innerHTML = value_27355;
{
var G__27361 = seq__27351_27356;
var G__27362 = chunk__27352_27357;
var G__27363 = count__27353_27358;
var G__27364 = (i__27354_27359 + 1);
seq__27351_27356 = G__27361;
chunk__27352_27357 = G__27362;
count__27353_27358 = G__27363;
i__27354_27359 = G__27364;
continue;
}
} else
{var temp__4092__auto___27365 = cljs.core.seq(seq__27351_27356);if(temp__4092__auto___27365)
{var seq__27351_27366__$1 = temp__4092__auto___27365;if(cljs.core.chunked_seq_QMARK_(seq__27351_27366__$1))
{var c__4148__auto___27367 = cljs.core.chunk_first(seq__27351_27366__$1);{
var G__27368 = cljs.core.chunk_rest(seq__27351_27366__$1);
var G__27369 = c__4148__auto___27367;
var G__27370 = cljs.core.count(c__4148__auto___27367);
var G__27371 = 0;
seq__27351_27356 = G__27368;
chunk__27352_27357 = G__27369;
count__27353_27358 = G__27370;
i__27354_27359 = G__27371;
continue;
}
} else
{var node_27372 = cljs.core.first(seq__27351_27366__$1);node_27372.innerHTML = value_27355;
{
var G__27373 = cljs.core.next(seq__27351_27366__$1);
var G__27374 = null;
var G__27375 = 0;
var G__27376 = 0;
seq__27351_27356 = G__27373;
chunk__27352_27357 = G__27374;
count__27353_27358 = G__27375;
i__27354_27359 = G__27376;
continue;
}
}
} else
{}
}
break;
}
}catch (e27350){if((e27350 instanceof Error))
{var e_27377 = e27350;domina.replace_children_BANG_(content,value_27355);
} else
{if(cljs.core.constant$keyword$213)
{throw e27350;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27384_27388 = cljs.core.seq(children);var chunk__27385_27389 = null;var count__27386_27390 = 0;var i__27387_27391 = 0;while(true){
if((i__27387_27391 < count__27386_27390))
{var child_27392 = chunk__27385_27389.cljs$core$IIndexed$_nth$arity$2(null,i__27387_27391);frag.appendChild(child_27392);
{
var G__27393 = seq__27384_27388;
var G__27394 = chunk__27385_27389;
var G__27395 = count__27386_27390;
var G__27396 = (i__27387_27391 + 1);
seq__27384_27388 = G__27393;
chunk__27385_27389 = G__27394;
count__27386_27390 = G__27395;
i__27387_27391 = G__27396;
continue;
}
} else
{var temp__4092__auto___27397 = cljs.core.seq(seq__27384_27388);if(temp__4092__auto___27397)
{var seq__27384_27398__$1 = temp__4092__auto___27397;if(cljs.core.chunked_seq_QMARK_(seq__27384_27398__$1))
{var c__4148__auto___27399 = cljs.core.chunk_first(seq__27384_27398__$1);{
var G__27400 = cljs.core.chunk_rest(seq__27384_27398__$1);
var G__27401 = c__4148__auto___27399;
var G__27402 = cljs.core.count(c__4148__auto___27399);
var G__27403 = 0;
seq__27384_27388 = G__27400;
chunk__27385_27389 = G__27401;
count__27386_27390 = G__27402;
i__27387_27391 = G__27403;
continue;
}
} else
{var child_27404 = cljs.core.first(seq__27384_27398__$1);frag.appendChild(child_27404);
{
var G__27405 = cljs.core.next(seq__27384_27398__$1);
var G__27406 = null;
var G__27407 = 0;
var G__27408 = 0;
seq__27384_27388 = G__27405;
chunk__27385_27389 = G__27406;
count__27386_27390 = G__27407;
i__27387_27391 = G__27408;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27378_SHARP_,p2__27379_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27378_SHARP_,p2__27379_SHARP_) : f.call(null,p1__27378_SHARP_,p2__27379_SHARP_));
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
{if((function (){var G__27410 = list_thing;if(G__27410)
{var bit__4050__auto__ = (G__27410.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27410.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27410.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27410);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27410);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$214)
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
{if((function (){var G__27411 = content;if(G__27411)
{var bit__4050__auto__ = (G__27411.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27411.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27411.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27411);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27411);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$214)
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
{if((function (){var G__27412 = content;if(G__27412)
{var bit__4050__auto__ = (G__27412.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27412.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27412.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27412);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27412);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$214)
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
