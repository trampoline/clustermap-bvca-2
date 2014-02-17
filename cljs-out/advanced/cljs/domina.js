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
var opt_wrapper_27483 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27484 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27485 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$225,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27484,table_section_wrapper_27484,opt_wrapper_27483,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27485,table_section_wrapper_27484,cell_wrapper_27485,opt_wrapper_27483,table_section_wrapper_27484,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27484]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27490 = cljs.core.seq(tbody);var chunk__27491 = null;var count__27492 = 0;var i__27493 = 0;while(true){
if((i__27493 < count__27492))
{var child = chunk__27491.cljs$core$IIndexed$_nth$arity$2(null,i__27493);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27494 = seq__27490;
var G__27495 = chunk__27491;
var G__27496 = count__27492;
var G__27497 = (i__27493 + 1);
seq__27490 = G__27494;
chunk__27491 = G__27495;
count__27492 = G__27496;
i__27493 = G__27497;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27490);if(temp__4092__auto__)
{var seq__27490__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27490__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27490__$1);{
var G__27498 = cljs.core.chunk_rest(seq__27490__$1);
var G__27499 = c__4148__auto__;
var G__27500 = cljs.core.count(c__4148__auto__);
var G__27501 = 0;
seq__27490 = G__27498;
chunk__27491 = G__27499;
count__27492 = G__27500;
i__27493 = G__27501;
continue;
}
} else
{var child = cljs.core.first(seq__27490__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27502 = cljs.core.next(seq__27490__$1);
var G__27503 = null;
var G__27504 = 0;
var G__27505 = 0;
seq__27490 = G__27502;
chunk__27491 = G__27503;
count__27492 = G__27504;
i__27493 = G__27505;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27507 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27507,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27508 = wrapper.lastChild;
var G__27509 = (level - 1);
wrapper = G__27508;
level = G__27509;
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
domina.DomContent = (function (){var obj27511 = {};return obj27511;
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
log_debug.cljs$lang$applyTo = (function (arglist__27512){
var mesg = cljs.core.seq(arglist__27512);
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
log.cljs$lang$applyTo = (function (arglist__27513){
var mesg = cljs.core.seq(arglist__27513);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27514){
var contents = cljs.core.seq(arglist__27514);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27515_SHARP_){return p1__27515_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27516_SHARP_,p2__27517_SHARP_){return goog.dom.insertChildAt(p1__27516_SHARP_,p2__27517_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27516_SHARP_,p2__27517_SHARP_){return goog.dom.insertChildAt(p1__27516_SHARP_,p2__27517_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27519_SHARP_,p2__27518_SHARP_){return goog.dom.insertSiblingBefore(p2__27518_SHARP_,p1__27519_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27519_SHARP_,p2__27518_SHARP_){return goog.dom.insertSiblingBefore(p2__27518_SHARP_,p1__27519_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27521_SHARP_,p2__27520_SHARP_){return goog.dom.insertSiblingAfter(p2__27520_SHARP_,p1__27521_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27521_SHARP_,p2__27520_SHARP_){return goog.dom.insertSiblingAfter(p2__27520_SHARP_,p1__27521_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27523_SHARP_,p2__27522_SHARP_){return goog.dom.replaceNode(p2__27522_SHARP_,p1__27523_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27523_SHARP_,p2__27522_SHARP_){return goog.dom.replaceNode(p2__27522_SHARP_,p1__27523_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27528_27532 = cljs.core.seq(domina.nodes(content));var chunk__27529_27533 = null;var count__27530_27534 = 0;var i__27531_27535 = 0;while(true){
if((i__27531_27535 < count__27530_27534))
{var n_27536 = chunk__27529_27533.cljs$core$IIndexed$_nth$arity$2(null,i__27531_27535);goog.style.setStyle(n_27536,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27537 = seq__27528_27532;
var G__27538 = chunk__27529_27533;
var G__27539 = count__27530_27534;
var G__27540 = (i__27531_27535 + 1);
seq__27528_27532 = G__27537;
chunk__27529_27533 = G__27538;
count__27530_27534 = G__27539;
i__27531_27535 = G__27540;
continue;
}
} else
{var temp__4092__auto___27541 = cljs.core.seq(seq__27528_27532);if(temp__4092__auto___27541)
{var seq__27528_27542__$1 = temp__4092__auto___27541;if(cljs.core.chunked_seq_QMARK_(seq__27528_27542__$1))
{var c__4148__auto___27543 = cljs.core.chunk_first(seq__27528_27542__$1);{
var G__27544 = cljs.core.chunk_rest(seq__27528_27542__$1);
var G__27545 = c__4148__auto___27543;
var G__27546 = cljs.core.count(c__4148__auto___27543);
var G__27547 = 0;
seq__27528_27532 = G__27544;
chunk__27529_27533 = G__27545;
count__27530_27534 = G__27546;
i__27531_27535 = G__27547;
continue;
}
} else
{var n_27548 = cljs.core.first(seq__27528_27542__$1);goog.style.setStyle(n_27548,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27549 = cljs.core.next(seq__27528_27542__$1);
var G__27550 = null;
var G__27551 = 0;
var G__27552 = 0;
seq__27528_27532 = G__27549;
chunk__27529_27533 = G__27550;
count__27530_27534 = G__27551;
i__27531_27535 = G__27552;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27553){
var content = cljs.core.first(arglist__27553);
arglist__27553 = cljs.core.next(arglist__27553);
var name = cljs.core.first(arglist__27553);
var value = cljs.core.rest(arglist__27553);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27558_27562 = cljs.core.seq(domina.nodes(content));var chunk__27559_27563 = null;var count__27560_27564 = 0;var i__27561_27565 = 0;while(true){
if((i__27561_27565 < count__27560_27564))
{var n_27566 = chunk__27559_27563.cljs$core$IIndexed$_nth$arity$2(null,i__27561_27565);n_27566.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27567 = seq__27558_27562;
var G__27568 = chunk__27559_27563;
var G__27569 = count__27560_27564;
var G__27570 = (i__27561_27565 + 1);
seq__27558_27562 = G__27567;
chunk__27559_27563 = G__27568;
count__27560_27564 = G__27569;
i__27561_27565 = G__27570;
continue;
}
} else
{var temp__4092__auto___27571 = cljs.core.seq(seq__27558_27562);if(temp__4092__auto___27571)
{var seq__27558_27572__$1 = temp__4092__auto___27571;if(cljs.core.chunked_seq_QMARK_(seq__27558_27572__$1))
{var c__4148__auto___27573 = cljs.core.chunk_first(seq__27558_27572__$1);{
var G__27574 = cljs.core.chunk_rest(seq__27558_27572__$1);
var G__27575 = c__4148__auto___27573;
var G__27576 = cljs.core.count(c__4148__auto___27573);
var G__27577 = 0;
seq__27558_27562 = G__27574;
chunk__27559_27563 = G__27575;
count__27560_27564 = G__27576;
i__27561_27565 = G__27577;
continue;
}
} else
{var n_27578 = cljs.core.first(seq__27558_27572__$1);n_27578.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27579 = cljs.core.next(seq__27558_27572__$1);
var G__27580 = null;
var G__27581 = 0;
var G__27582 = 0;
seq__27558_27562 = G__27579;
chunk__27559_27563 = G__27580;
count__27560_27564 = G__27581;
i__27561_27565 = G__27582;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27583){
var content = cljs.core.first(arglist__27583);
arglist__27583 = cljs.core.next(arglist__27583);
var name = cljs.core.first(arglist__27583);
var value = cljs.core.rest(arglist__27583);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27588_27592 = cljs.core.seq(domina.nodes(content));var chunk__27589_27593 = null;var count__27590_27594 = 0;var i__27591_27595 = 0;while(true){
if((i__27591_27595 < count__27590_27594))
{var n_27596 = chunk__27589_27593.cljs$core$IIndexed$_nth$arity$2(null,i__27591_27595);n_27596.removeAttribute(cljs.core.name(name));
{
var G__27597 = seq__27588_27592;
var G__27598 = chunk__27589_27593;
var G__27599 = count__27590_27594;
var G__27600 = (i__27591_27595 + 1);
seq__27588_27592 = G__27597;
chunk__27589_27593 = G__27598;
count__27590_27594 = G__27599;
i__27591_27595 = G__27600;
continue;
}
} else
{var temp__4092__auto___27601 = cljs.core.seq(seq__27588_27592);if(temp__4092__auto___27601)
{var seq__27588_27602__$1 = temp__4092__auto___27601;if(cljs.core.chunked_seq_QMARK_(seq__27588_27602__$1))
{var c__4148__auto___27603 = cljs.core.chunk_first(seq__27588_27602__$1);{
var G__27604 = cljs.core.chunk_rest(seq__27588_27602__$1);
var G__27605 = c__4148__auto___27603;
var G__27606 = cljs.core.count(c__4148__auto___27603);
var G__27607 = 0;
seq__27588_27592 = G__27604;
chunk__27589_27593 = G__27605;
count__27590_27594 = G__27606;
i__27591_27595 = G__27607;
continue;
}
} else
{var n_27608 = cljs.core.first(seq__27588_27602__$1);n_27608.removeAttribute(cljs.core.name(name));
{
var G__27609 = cljs.core.next(seq__27588_27602__$1);
var G__27610 = null;
var G__27611 = 0;
var G__27612 = 0;
seq__27588_27592 = G__27609;
chunk__27589_27593 = G__27610;
count__27590_27594 = G__27611;
i__27591_27595 = G__27612;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27614 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$224)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27615_SHARP_){var attr = attrs__$1.item(p1__27615_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27622_27628 = cljs.core.seq(styles);var chunk__27623_27629 = null;var count__27624_27630 = 0;var i__27625_27631 = 0;while(true){
if((i__27625_27631 < count__27624_27630))
{var vec__27626_27632 = chunk__27623_27629.cljs$core$IIndexed$_nth$arity$2(null,i__27625_27631);var name_27633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626_27632,0,null);var value_27634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626_27632,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27633,cljs.core.array_seq([value_27634], 0));
{
var G__27635 = seq__27622_27628;
var G__27636 = chunk__27623_27629;
var G__27637 = count__27624_27630;
var G__27638 = (i__27625_27631 + 1);
seq__27622_27628 = G__27635;
chunk__27623_27629 = G__27636;
count__27624_27630 = G__27637;
i__27625_27631 = G__27638;
continue;
}
} else
{var temp__4092__auto___27639 = cljs.core.seq(seq__27622_27628);if(temp__4092__auto___27639)
{var seq__27622_27640__$1 = temp__4092__auto___27639;if(cljs.core.chunked_seq_QMARK_(seq__27622_27640__$1))
{var c__4148__auto___27641 = cljs.core.chunk_first(seq__27622_27640__$1);{
var G__27642 = cljs.core.chunk_rest(seq__27622_27640__$1);
var G__27643 = c__4148__auto___27641;
var G__27644 = cljs.core.count(c__4148__auto___27641);
var G__27645 = 0;
seq__27622_27628 = G__27642;
chunk__27623_27629 = G__27643;
count__27624_27630 = G__27644;
i__27625_27631 = G__27645;
continue;
}
} else
{var vec__27627_27646 = cljs.core.first(seq__27622_27640__$1);var name_27647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627_27646,0,null);var value_27648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627_27646,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27647,cljs.core.array_seq([value_27648], 0));
{
var G__27649 = cljs.core.next(seq__27622_27640__$1);
var G__27650 = null;
var G__27651 = 0;
var G__27652 = 0;
seq__27622_27628 = G__27649;
chunk__27623_27629 = G__27650;
count__27624_27630 = G__27651;
i__27625_27631 = G__27652;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27659_27665 = cljs.core.seq(attrs);var chunk__27660_27666 = null;var count__27661_27667 = 0;var i__27662_27668 = 0;while(true){
if((i__27662_27668 < count__27661_27667))
{var vec__27663_27669 = chunk__27660_27666.cljs$core$IIndexed$_nth$arity$2(null,i__27662_27668);var name_27670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27663_27669,0,null);var value_27671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27663_27669,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27670,cljs.core.array_seq([value_27671], 0));
{
var G__27672 = seq__27659_27665;
var G__27673 = chunk__27660_27666;
var G__27674 = count__27661_27667;
var G__27675 = (i__27662_27668 + 1);
seq__27659_27665 = G__27672;
chunk__27660_27666 = G__27673;
count__27661_27667 = G__27674;
i__27662_27668 = G__27675;
continue;
}
} else
{var temp__4092__auto___27676 = cljs.core.seq(seq__27659_27665);if(temp__4092__auto___27676)
{var seq__27659_27677__$1 = temp__4092__auto___27676;if(cljs.core.chunked_seq_QMARK_(seq__27659_27677__$1))
{var c__4148__auto___27678 = cljs.core.chunk_first(seq__27659_27677__$1);{
var G__27679 = cljs.core.chunk_rest(seq__27659_27677__$1);
var G__27680 = c__4148__auto___27678;
var G__27681 = cljs.core.count(c__4148__auto___27678);
var G__27682 = 0;
seq__27659_27665 = G__27679;
chunk__27660_27666 = G__27680;
count__27661_27667 = G__27681;
i__27662_27668 = G__27682;
continue;
}
} else
{var vec__27664_27683 = cljs.core.first(seq__27659_27677__$1);var name_27684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664_27683,0,null);var value_27685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664_27683,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27684,cljs.core.array_seq([value_27685], 0));
{
var G__27686 = cljs.core.next(seq__27659_27677__$1);
var G__27687 = null;
var G__27688 = 0;
var G__27689 = 0;
seq__27659_27665 = G__27686;
chunk__27660_27666 = G__27687;
count__27661_27667 = G__27688;
i__27662_27668 = G__27689;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27694_27698 = cljs.core.seq(domina.nodes(content));var chunk__27695_27699 = null;var count__27696_27700 = 0;var i__27697_27701 = 0;while(true){
if((i__27697_27701 < count__27696_27700))
{var node_27702 = chunk__27695_27699.cljs$core$IIndexed$_nth$arity$2(null,i__27697_27701);goog.dom.classes.add(node_27702,class$);
{
var G__27703 = seq__27694_27698;
var G__27704 = chunk__27695_27699;
var G__27705 = count__27696_27700;
var G__27706 = (i__27697_27701 + 1);
seq__27694_27698 = G__27703;
chunk__27695_27699 = G__27704;
count__27696_27700 = G__27705;
i__27697_27701 = G__27706;
continue;
}
} else
{var temp__4092__auto___27707 = cljs.core.seq(seq__27694_27698);if(temp__4092__auto___27707)
{var seq__27694_27708__$1 = temp__4092__auto___27707;if(cljs.core.chunked_seq_QMARK_(seq__27694_27708__$1))
{var c__4148__auto___27709 = cljs.core.chunk_first(seq__27694_27708__$1);{
var G__27710 = cljs.core.chunk_rest(seq__27694_27708__$1);
var G__27711 = c__4148__auto___27709;
var G__27712 = cljs.core.count(c__4148__auto___27709);
var G__27713 = 0;
seq__27694_27698 = G__27710;
chunk__27695_27699 = G__27711;
count__27696_27700 = G__27712;
i__27697_27701 = G__27713;
continue;
}
} else
{var node_27714 = cljs.core.first(seq__27694_27708__$1);goog.dom.classes.add(node_27714,class$);
{
var G__27715 = cljs.core.next(seq__27694_27708__$1);
var G__27716 = null;
var G__27717 = 0;
var G__27718 = 0;
seq__27694_27698 = G__27715;
chunk__27695_27699 = G__27716;
count__27696_27700 = G__27717;
i__27697_27701 = G__27718;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27723_27727 = cljs.core.seq(domina.nodes(content));var chunk__27724_27728 = null;var count__27725_27729 = 0;var i__27726_27730 = 0;while(true){
if((i__27726_27730 < count__27725_27729))
{var node_27731 = chunk__27724_27728.cljs$core$IIndexed$_nth$arity$2(null,i__27726_27730);goog.dom.classes.remove(node_27731,class$);
{
var G__27732 = seq__27723_27727;
var G__27733 = chunk__27724_27728;
var G__27734 = count__27725_27729;
var G__27735 = (i__27726_27730 + 1);
seq__27723_27727 = G__27732;
chunk__27724_27728 = G__27733;
count__27725_27729 = G__27734;
i__27726_27730 = G__27735;
continue;
}
} else
{var temp__4092__auto___27736 = cljs.core.seq(seq__27723_27727);if(temp__4092__auto___27736)
{var seq__27723_27737__$1 = temp__4092__auto___27736;if(cljs.core.chunked_seq_QMARK_(seq__27723_27737__$1))
{var c__4148__auto___27738 = cljs.core.chunk_first(seq__27723_27737__$1);{
var G__27739 = cljs.core.chunk_rest(seq__27723_27737__$1);
var G__27740 = c__4148__auto___27738;
var G__27741 = cljs.core.count(c__4148__auto___27738);
var G__27742 = 0;
seq__27723_27727 = G__27739;
chunk__27724_27728 = G__27740;
count__27725_27729 = G__27741;
i__27726_27730 = G__27742;
continue;
}
} else
{var node_27743 = cljs.core.first(seq__27723_27737__$1);goog.dom.classes.remove(node_27743,class$);
{
var G__27744 = cljs.core.next(seq__27723_27737__$1);
var G__27745 = null;
var G__27746 = 0;
var G__27747 = 0;
seq__27723_27727 = G__27744;
chunk__27724_27728 = G__27745;
count__27725_27729 = G__27746;
i__27726_27730 = G__27747;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27752_27756 = cljs.core.seq(domina.nodes(content));var chunk__27753_27757 = null;var count__27754_27758 = 0;var i__27755_27759 = 0;while(true){
if((i__27755_27759 < count__27754_27758))
{var node_27760 = chunk__27753_27757.cljs$core$IIndexed$_nth$arity$2(null,i__27755_27759);goog.dom.classes.toggle(node_27760,class$);
{
var G__27761 = seq__27752_27756;
var G__27762 = chunk__27753_27757;
var G__27763 = count__27754_27758;
var G__27764 = (i__27755_27759 + 1);
seq__27752_27756 = G__27761;
chunk__27753_27757 = G__27762;
count__27754_27758 = G__27763;
i__27755_27759 = G__27764;
continue;
}
} else
{var temp__4092__auto___27765 = cljs.core.seq(seq__27752_27756);if(temp__4092__auto___27765)
{var seq__27752_27766__$1 = temp__4092__auto___27765;if(cljs.core.chunked_seq_QMARK_(seq__27752_27766__$1))
{var c__4148__auto___27767 = cljs.core.chunk_first(seq__27752_27766__$1);{
var G__27768 = cljs.core.chunk_rest(seq__27752_27766__$1);
var G__27769 = c__4148__auto___27767;
var G__27770 = cljs.core.count(c__4148__auto___27767);
var G__27771 = 0;
seq__27752_27756 = G__27768;
chunk__27753_27757 = G__27769;
count__27754_27758 = G__27770;
i__27755_27759 = G__27771;
continue;
}
} else
{var node_27772 = cljs.core.first(seq__27752_27766__$1);goog.dom.classes.toggle(node_27772,class$);
{
var G__27773 = cljs.core.next(seq__27752_27766__$1);
var G__27774 = null;
var G__27775 = 0;
var G__27776 = 0;
seq__27752_27756 = G__27773;
chunk__27753_27757 = G__27774;
count__27754_27758 = G__27775;
i__27755_27759 = G__27776;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27785__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27781_27786 = cljs.core.seq(domina.nodes(content));var chunk__27782_27787 = null;var count__27783_27788 = 0;var i__27784_27789 = 0;while(true){
if((i__27784_27789 < count__27783_27788))
{var node_27790 = chunk__27782_27787.cljs$core$IIndexed$_nth$arity$2(null,i__27784_27789);goog.dom.classes.set(node_27790,classes_27785__$1);
{
var G__27791 = seq__27781_27786;
var G__27792 = chunk__27782_27787;
var G__27793 = count__27783_27788;
var G__27794 = (i__27784_27789 + 1);
seq__27781_27786 = G__27791;
chunk__27782_27787 = G__27792;
count__27783_27788 = G__27793;
i__27784_27789 = G__27794;
continue;
}
} else
{var temp__4092__auto___27795 = cljs.core.seq(seq__27781_27786);if(temp__4092__auto___27795)
{var seq__27781_27796__$1 = temp__4092__auto___27795;if(cljs.core.chunked_seq_QMARK_(seq__27781_27796__$1))
{var c__4148__auto___27797 = cljs.core.chunk_first(seq__27781_27796__$1);{
var G__27798 = cljs.core.chunk_rest(seq__27781_27796__$1);
var G__27799 = c__4148__auto___27797;
var G__27800 = cljs.core.count(c__4148__auto___27797);
var G__27801 = 0;
seq__27781_27786 = G__27798;
chunk__27782_27787 = G__27799;
count__27783_27788 = G__27800;
i__27784_27789 = G__27801;
continue;
}
} else
{var node_27802 = cljs.core.first(seq__27781_27796__$1);goog.dom.classes.set(node_27802,classes_27785__$1);
{
var G__27803 = cljs.core.next(seq__27781_27796__$1);
var G__27804 = null;
var G__27805 = 0;
var G__27806 = 0;
seq__27781_27786 = G__27803;
chunk__27782_27787 = G__27804;
count__27783_27788 = G__27805;
i__27784_27789 = G__27806;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27811_27815 = cljs.core.seq(domina.nodes(content));var chunk__27812_27816 = null;var count__27813_27817 = 0;var i__27814_27818 = 0;while(true){
if((i__27814_27818 < count__27813_27817))
{var node_27819 = chunk__27812_27816.cljs$core$IIndexed$_nth$arity$2(null,i__27814_27818);goog.dom.setTextContent(node_27819,value);
{
var G__27820 = seq__27811_27815;
var G__27821 = chunk__27812_27816;
var G__27822 = count__27813_27817;
var G__27823 = (i__27814_27818 + 1);
seq__27811_27815 = G__27820;
chunk__27812_27816 = G__27821;
count__27813_27817 = G__27822;
i__27814_27818 = G__27823;
continue;
}
} else
{var temp__4092__auto___27824 = cljs.core.seq(seq__27811_27815);if(temp__4092__auto___27824)
{var seq__27811_27825__$1 = temp__4092__auto___27824;if(cljs.core.chunked_seq_QMARK_(seq__27811_27825__$1))
{var c__4148__auto___27826 = cljs.core.chunk_first(seq__27811_27825__$1);{
var G__27827 = cljs.core.chunk_rest(seq__27811_27825__$1);
var G__27828 = c__4148__auto___27826;
var G__27829 = cljs.core.count(c__4148__auto___27826);
var G__27830 = 0;
seq__27811_27815 = G__27827;
chunk__27812_27816 = G__27828;
count__27813_27817 = G__27829;
i__27814_27818 = G__27830;
continue;
}
} else
{var node_27831 = cljs.core.first(seq__27811_27825__$1);goog.dom.setTextContent(node_27831,value);
{
var G__27832 = cljs.core.next(seq__27811_27825__$1);
var G__27833 = null;
var G__27834 = 0;
var G__27835 = 0;
seq__27811_27815 = G__27832;
chunk__27812_27816 = G__27833;
count__27813_27817 = G__27834;
i__27814_27818 = G__27835;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27840_27844 = cljs.core.seq(domina.nodes(content));var chunk__27841_27845 = null;var count__27842_27846 = 0;var i__27843_27847 = 0;while(true){
if((i__27843_27847 < count__27842_27846))
{var node_27848 = chunk__27841_27845.cljs$core$IIndexed$_nth$arity$2(null,i__27843_27847);goog.dom.forms.setValue(node_27848,value);
{
var G__27849 = seq__27840_27844;
var G__27850 = chunk__27841_27845;
var G__27851 = count__27842_27846;
var G__27852 = (i__27843_27847 + 1);
seq__27840_27844 = G__27849;
chunk__27841_27845 = G__27850;
count__27842_27846 = G__27851;
i__27843_27847 = G__27852;
continue;
}
} else
{var temp__4092__auto___27853 = cljs.core.seq(seq__27840_27844);if(temp__4092__auto___27853)
{var seq__27840_27854__$1 = temp__4092__auto___27853;if(cljs.core.chunked_seq_QMARK_(seq__27840_27854__$1))
{var c__4148__auto___27855 = cljs.core.chunk_first(seq__27840_27854__$1);{
var G__27856 = cljs.core.chunk_rest(seq__27840_27854__$1);
var G__27857 = c__4148__auto___27855;
var G__27858 = cljs.core.count(c__4148__auto___27855);
var G__27859 = 0;
seq__27840_27844 = G__27856;
chunk__27841_27845 = G__27857;
count__27842_27846 = G__27858;
i__27843_27847 = G__27859;
continue;
}
} else
{var node_27860 = cljs.core.first(seq__27840_27854__$1);goog.dom.forms.setValue(node_27860,value);
{
var G__27861 = cljs.core.next(seq__27840_27854__$1);
var G__27862 = null;
var G__27863 = 0;
var G__27864 = 0;
seq__27840_27844 = G__27861;
chunk__27841_27845 = G__27862;
count__27842_27846 = G__27863;
i__27843_27847 = G__27864;
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
{var value_27875 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27871_27876 = cljs.core.seq(domina.nodes(content));var chunk__27872_27877 = null;var count__27873_27878 = 0;var i__27874_27879 = 0;while(true){
if((i__27874_27879 < count__27873_27878))
{var node_27880 = chunk__27872_27877.cljs$core$IIndexed$_nth$arity$2(null,i__27874_27879);node_27880.innerHTML = value_27875;
{
var G__27881 = seq__27871_27876;
var G__27882 = chunk__27872_27877;
var G__27883 = count__27873_27878;
var G__27884 = (i__27874_27879 + 1);
seq__27871_27876 = G__27881;
chunk__27872_27877 = G__27882;
count__27873_27878 = G__27883;
i__27874_27879 = G__27884;
continue;
}
} else
{var temp__4092__auto___27885 = cljs.core.seq(seq__27871_27876);if(temp__4092__auto___27885)
{var seq__27871_27886__$1 = temp__4092__auto___27885;if(cljs.core.chunked_seq_QMARK_(seq__27871_27886__$1))
{var c__4148__auto___27887 = cljs.core.chunk_first(seq__27871_27886__$1);{
var G__27888 = cljs.core.chunk_rest(seq__27871_27886__$1);
var G__27889 = c__4148__auto___27887;
var G__27890 = cljs.core.count(c__4148__auto___27887);
var G__27891 = 0;
seq__27871_27876 = G__27888;
chunk__27872_27877 = G__27889;
count__27873_27878 = G__27890;
i__27874_27879 = G__27891;
continue;
}
} else
{var node_27892 = cljs.core.first(seq__27871_27886__$1);node_27892.innerHTML = value_27875;
{
var G__27893 = cljs.core.next(seq__27871_27886__$1);
var G__27894 = null;
var G__27895 = 0;
var G__27896 = 0;
seq__27871_27876 = G__27893;
chunk__27872_27877 = G__27894;
count__27873_27878 = G__27895;
i__27874_27879 = G__27896;
continue;
}
}
} else
{}
}
break;
}
}catch (e27870){if((e27870 instanceof Error))
{var e_27897 = e27870;domina.replace_children_BANG_(content,value_27875);
} else
{if(cljs.core.constant$keyword$224)
{throw e27870;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27904_27908 = cljs.core.seq(children);var chunk__27905_27909 = null;var count__27906_27910 = 0;var i__27907_27911 = 0;while(true){
if((i__27907_27911 < count__27906_27910))
{var child_27912 = chunk__27905_27909.cljs$core$IIndexed$_nth$arity$2(null,i__27907_27911);frag.appendChild(child_27912);
{
var G__27913 = seq__27904_27908;
var G__27914 = chunk__27905_27909;
var G__27915 = count__27906_27910;
var G__27916 = (i__27907_27911 + 1);
seq__27904_27908 = G__27913;
chunk__27905_27909 = G__27914;
count__27906_27910 = G__27915;
i__27907_27911 = G__27916;
continue;
}
} else
{var temp__4092__auto___27917 = cljs.core.seq(seq__27904_27908);if(temp__4092__auto___27917)
{var seq__27904_27918__$1 = temp__4092__auto___27917;if(cljs.core.chunked_seq_QMARK_(seq__27904_27918__$1))
{var c__4148__auto___27919 = cljs.core.chunk_first(seq__27904_27918__$1);{
var G__27920 = cljs.core.chunk_rest(seq__27904_27918__$1);
var G__27921 = c__4148__auto___27919;
var G__27922 = cljs.core.count(c__4148__auto___27919);
var G__27923 = 0;
seq__27904_27908 = G__27920;
chunk__27905_27909 = G__27921;
count__27906_27910 = G__27922;
i__27907_27911 = G__27923;
continue;
}
} else
{var child_27924 = cljs.core.first(seq__27904_27918__$1);frag.appendChild(child_27924);
{
var G__27925 = cljs.core.next(seq__27904_27918__$1);
var G__27926 = null;
var G__27927 = 0;
var G__27928 = 0;
seq__27904_27908 = G__27925;
chunk__27905_27909 = G__27926;
count__27906_27910 = G__27927;
i__27907_27911 = G__27928;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27898_SHARP_,p2__27899_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27898_SHARP_,p2__27899_SHARP_) : f.call(null,p1__27898_SHARP_,p2__27899_SHARP_));
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
{if((function (){var G__27930 = list_thing;if(G__27930)
{var bit__4050__auto__ = (G__27930.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27930.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27930);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$225)
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
{if((function (){var G__27931 = content;if(G__27931)
{var bit__4050__auto__ = (G__27931.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27931.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27931.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27931);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27931);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$225)
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
{if((function (){var G__27932 = content;if(G__27932)
{var bit__4050__auto__ = (G__27932.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27932.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27932);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$225)
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
