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
var opt_wrapper_27435 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$224,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27436,table_section_wrapper_27436,opt_wrapper_27435,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27437,table_section_wrapper_27436,cell_wrapper_27437,opt_wrapper_27435,table_section_wrapper_27436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27436]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27442 = cljs.core.seq(tbody);var chunk__27443 = null;var count__27444 = 0;var i__27445 = 0;while(true){
if((i__27445 < count__27444))
{var child = chunk__27443.cljs$core$IIndexed$_nth$arity$2(null,i__27445);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27446 = seq__27442;
var G__27447 = chunk__27443;
var G__27448 = count__27444;
var G__27449 = (i__27445 + 1);
seq__27442 = G__27446;
chunk__27443 = G__27447;
count__27444 = G__27448;
i__27445 = G__27449;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27442);if(temp__4092__auto__)
{var seq__27442__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27442__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27442__$1);{
var G__27450 = cljs.core.chunk_rest(seq__27442__$1);
var G__27451 = c__4148__auto__;
var G__27452 = cljs.core.count(c__4148__auto__);
var G__27453 = 0;
seq__27442 = G__27450;
chunk__27443 = G__27451;
count__27444 = G__27452;
i__27445 = G__27453;
continue;
}
} else
{var child = cljs.core.first(seq__27442__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27454 = cljs.core.next(seq__27442__$1);
var G__27455 = null;
var G__27456 = 0;
var G__27457 = 0;
seq__27442 = G__27454;
chunk__27443 = G__27455;
count__27444 = G__27456;
i__27445 = G__27457;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27459 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27460 = wrapper.lastChild;
var G__27461 = (level - 1);
wrapper = G__27460;
level = G__27461;
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
domina.DomContent = (function (){var obj27463 = {};return obj27463;
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
log_debug.cljs$lang$applyTo = (function (arglist__27464){
var mesg = cljs.core.seq(arglist__27464);
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
log.cljs$lang$applyTo = (function (arglist__27465){
var mesg = cljs.core.seq(arglist__27465);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27466){
var contents = cljs.core.seq(arglist__27466);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27467_SHARP_){return p1__27467_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27468_SHARP_,p2__27469_SHARP_){return goog.dom.insertChildAt(p1__27468_SHARP_,p2__27469_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27468_SHARP_,p2__27469_SHARP_){return goog.dom.insertChildAt(p1__27468_SHARP_,p2__27469_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27471_SHARP_,p2__27470_SHARP_){return goog.dom.insertSiblingBefore(p2__27470_SHARP_,p1__27471_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27471_SHARP_,p2__27470_SHARP_){return goog.dom.insertSiblingBefore(p2__27470_SHARP_,p1__27471_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27473_SHARP_,p2__27472_SHARP_){return goog.dom.insertSiblingAfter(p2__27472_SHARP_,p1__27473_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27473_SHARP_,p2__27472_SHARP_){return goog.dom.insertSiblingAfter(p2__27472_SHARP_,p1__27473_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27475_SHARP_,p2__27474_SHARP_){return goog.dom.replaceNode(p2__27474_SHARP_,p1__27475_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27475_SHARP_,p2__27474_SHARP_){return goog.dom.replaceNode(p2__27474_SHARP_,p1__27475_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27480_27484 = cljs.core.seq(domina.nodes(content));var chunk__27481_27485 = null;var count__27482_27486 = 0;var i__27483_27487 = 0;while(true){
if((i__27483_27487 < count__27482_27486))
{var n_27488 = chunk__27481_27485.cljs$core$IIndexed$_nth$arity$2(null,i__27483_27487);goog.style.setStyle(n_27488,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27489 = seq__27480_27484;
var G__27490 = chunk__27481_27485;
var G__27491 = count__27482_27486;
var G__27492 = (i__27483_27487 + 1);
seq__27480_27484 = G__27489;
chunk__27481_27485 = G__27490;
count__27482_27486 = G__27491;
i__27483_27487 = G__27492;
continue;
}
} else
{var temp__4092__auto___27493 = cljs.core.seq(seq__27480_27484);if(temp__4092__auto___27493)
{var seq__27480_27494__$1 = temp__4092__auto___27493;if(cljs.core.chunked_seq_QMARK_(seq__27480_27494__$1))
{var c__4148__auto___27495 = cljs.core.chunk_first(seq__27480_27494__$1);{
var G__27496 = cljs.core.chunk_rest(seq__27480_27494__$1);
var G__27497 = c__4148__auto___27495;
var G__27498 = cljs.core.count(c__4148__auto___27495);
var G__27499 = 0;
seq__27480_27484 = G__27496;
chunk__27481_27485 = G__27497;
count__27482_27486 = G__27498;
i__27483_27487 = G__27499;
continue;
}
} else
{var n_27500 = cljs.core.first(seq__27480_27494__$1);goog.style.setStyle(n_27500,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27501 = cljs.core.next(seq__27480_27494__$1);
var G__27502 = null;
var G__27503 = 0;
var G__27504 = 0;
seq__27480_27484 = G__27501;
chunk__27481_27485 = G__27502;
count__27482_27486 = G__27503;
i__27483_27487 = G__27504;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27505){
var content = cljs.core.first(arglist__27505);
arglist__27505 = cljs.core.next(arglist__27505);
var name = cljs.core.first(arglist__27505);
var value = cljs.core.rest(arglist__27505);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27510_27514 = cljs.core.seq(domina.nodes(content));var chunk__27511_27515 = null;var count__27512_27516 = 0;var i__27513_27517 = 0;while(true){
if((i__27513_27517 < count__27512_27516))
{var n_27518 = chunk__27511_27515.cljs$core$IIndexed$_nth$arity$2(null,i__27513_27517);n_27518.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27519 = seq__27510_27514;
var G__27520 = chunk__27511_27515;
var G__27521 = count__27512_27516;
var G__27522 = (i__27513_27517 + 1);
seq__27510_27514 = G__27519;
chunk__27511_27515 = G__27520;
count__27512_27516 = G__27521;
i__27513_27517 = G__27522;
continue;
}
} else
{var temp__4092__auto___27523 = cljs.core.seq(seq__27510_27514);if(temp__4092__auto___27523)
{var seq__27510_27524__$1 = temp__4092__auto___27523;if(cljs.core.chunked_seq_QMARK_(seq__27510_27524__$1))
{var c__4148__auto___27525 = cljs.core.chunk_first(seq__27510_27524__$1);{
var G__27526 = cljs.core.chunk_rest(seq__27510_27524__$1);
var G__27527 = c__4148__auto___27525;
var G__27528 = cljs.core.count(c__4148__auto___27525);
var G__27529 = 0;
seq__27510_27514 = G__27526;
chunk__27511_27515 = G__27527;
count__27512_27516 = G__27528;
i__27513_27517 = G__27529;
continue;
}
} else
{var n_27530 = cljs.core.first(seq__27510_27524__$1);n_27530.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27531 = cljs.core.next(seq__27510_27524__$1);
var G__27532 = null;
var G__27533 = 0;
var G__27534 = 0;
seq__27510_27514 = G__27531;
chunk__27511_27515 = G__27532;
count__27512_27516 = G__27533;
i__27513_27517 = G__27534;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27535){
var content = cljs.core.first(arglist__27535);
arglist__27535 = cljs.core.next(arglist__27535);
var name = cljs.core.first(arglist__27535);
var value = cljs.core.rest(arglist__27535);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27540_27544 = cljs.core.seq(domina.nodes(content));var chunk__27541_27545 = null;var count__27542_27546 = 0;var i__27543_27547 = 0;while(true){
if((i__27543_27547 < count__27542_27546))
{var n_27548 = chunk__27541_27545.cljs$core$IIndexed$_nth$arity$2(null,i__27543_27547);n_27548.removeAttribute(cljs.core.name(name));
{
var G__27549 = seq__27540_27544;
var G__27550 = chunk__27541_27545;
var G__27551 = count__27542_27546;
var G__27552 = (i__27543_27547 + 1);
seq__27540_27544 = G__27549;
chunk__27541_27545 = G__27550;
count__27542_27546 = G__27551;
i__27543_27547 = G__27552;
continue;
}
} else
{var temp__4092__auto___27553 = cljs.core.seq(seq__27540_27544);if(temp__4092__auto___27553)
{var seq__27540_27554__$1 = temp__4092__auto___27553;if(cljs.core.chunked_seq_QMARK_(seq__27540_27554__$1))
{var c__4148__auto___27555 = cljs.core.chunk_first(seq__27540_27554__$1);{
var G__27556 = cljs.core.chunk_rest(seq__27540_27554__$1);
var G__27557 = c__4148__auto___27555;
var G__27558 = cljs.core.count(c__4148__auto___27555);
var G__27559 = 0;
seq__27540_27544 = G__27556;
chunk__27541_27545 = G__27557;
count__27542_27546 = G__27558;
i__27543_27547 = G__27559;
continue;
}
} else
{var n_27560 = cljs.core.first(seq__27540_27554__$1);n_27560.removeAttribute(cljs.core.name(name));
{
var G__27561 = cljs.core.next(seq__27540_27554__$1);
var G__27562 = null;
var G__27563 = 0;
var G__27564 = 0;
seq__27540_27544 = G__27561;
chunk__27541_27545 = G__27562;
count__27542_27546 = G__27563;
i__27543_27547 = G__27564;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27566 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$223)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27567_SHARP_){var attr = attrs__$1.item(p1__27567_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27574_27580 = cljs.core.seq(styles);var chunk__27575_27581 = null;var count__27576_27582 = 0;var i__27577_27583 = 0;while(true){
if((i__27577_27583 < count__27576_27582))
{var vec__27578_27584 = chunk__27575_27581.cljs$core$IIndexed$_nth$arity$2(null,i__27577_27583);var name_27585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27578_27584,0,null);var value_27586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27578_27584,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27585,cljs.core.array_seq([value_27586], 0));
{
var G__27587 = seq__27574_27580;
var G__27588 = chunk__27575_27581;
var G__27589 = count__27576_27582;
var G__27590 = (i__27577_27583 + 1);
seq__27574_27580 = G__27587;
chunk__27575_27581 = G__27588;
count__27576_27582 = G__27589;
i__27577_27583 = G__27590;
continue;
}
} else
{var temp__4092__auto___27591 = cljs.core.seq(seq__27574_27580);if(temp__4092__auto___27591)
{var seq__27574_27592__$1 = temp__4092__auto___27591;if(cljs.core.chunked_seq_QMARK_(seq__27574_27592__$1))
{var c__4148__auto___27593 = cljs.core.chunk_first(seq__27574_27592__$1);{
var G__27594 = cljs.core.chunk_rest(seq__27574_27592__$1);
var G__27595 = c__4148__auto___27593;
var G__27596 = cljs.core.count(c__4148__auto___27593);
var G__27597 = 0;
seq__27574_27580 = G__27594;
chunk__27575_27581 = G__27595;
count__27576_27582 = G__27596;
i__27577_27583 = G__27597;
continue;
}
} else
{var vec__27579_27598 = cljs.core.first(seq__27574_27592__$1);var name_27599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27579_27598,0,null);var value_27600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27579_27598,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27599,cljs.core.array_seq([value_27600], 0));
{
var G__27601 = cljs.core.next(seq__27574_27592__$1);
var G__27602 = null;
var G__27603 = 0;
var G__27604 = 0;
seq__27574_27580 = G__27601;
chunk__27575_27581 = G__27602;
count__27576_27582 = G__27603;
i__27577_27583 = G__27604;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27611_27617 = cljs.core.seq(attrs);var chunk__27612_27618 = null;var count__27613_27619 = 0;var i__27614_27620 = 0;while(true){
if((i__27614_27620 < count__27613_27619))
{var vec__27615_27621 = chunk__27612_27618.cljs$core$IIndexed$_nth$arity$2(null,i__27614_27620);var name_27622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615_27621,0,null);var value_27623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615_27621,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27622,cljs.core.array_seq([value_27623], 0));
{
var G__27624 = seq__27611_27617;
var G__27625 = chunk__27612_27618;
var G__27626 = count__27613_27619;
var G__27627 = (i__27614_27620 + 1);
seq__27611_27617 = G__27624;
chunk__27612_27618 = G__27625;
count__27613_27619 = G__27626;
i__27614_27620 = G__27627;
continue;
}
} else
{var temp__4092__auto___27628 = cljs.core.seq(seq__27611_27617);if(temp__4092__auto___27628)
{var seq__27611_27629__$1 = temp__4092__auto___27628;if(cljs.core.chunked_seq_QMARK_(seq__27611_27629__$1))
{var c__4148__auto___27630 = cljs.core.chunk_first(seq__27611_27629__$1);{
var G__27631 = cljs.core.chunk_rest(seq__27611_27629__$1);
var G__27632 = c__4148__auto___27630;
var G__27633 = cljs.core.count(c__4148__auto___27630);
var G__27634 = 0;
seq__27611_27617 = G__27631;
chunk__27612_27618 = G__27632;
count__27613_27619 = G__27633;
i__27614_27620 = G__27634;
continue;
}
} else
{var vec__27616_27635 = cljs.core.first(seq__27611_27629__$1);var name_27636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27616_27635,0,null);var value_27637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27616_27635,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27636,cljs.core.array_seq([value_27637], 0));
{
var G__27638 = cljs.core.next(seq__27611_27629__$1);
var G__27639 = null;
var G__27640 = 0;
var G__27641 = 0;
seq__27611_27617 = G__27638;
chunk__27612_27618 = G__27639;
count__27613_27619 = G__27640;
i__27614_27620 = G__27641;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27646_27650 = cljs.core.seq(domina.nodes(content));var chunk__27647_27651 = null;var count__27648_27652 = 0;var i__27649_27653 = 0;while(true){
if((i__27649_27653 < count__27648_27652))
{var node_27654 = chunk__27647_27651.cljs$core$IIndexed$_nth$arity$2(null,i__27649_27653);goog.dom.classes.add(node_27654,class$);
{
var G__27655 = seq__27646_27650;
var G__27656 = chunk__27647_27651;
var G__27657 = count__27648_27652;
var G__27658 = (i__27649_27653 + 1);
seq__27646_27650 = G__27655;
chunk__27647_27651 = G__27656;
count__27648_27652 = G__27657;
i__27649_27653 = G__27658;
continue;
}
} else
{var temp__4092__auto___27659 = cljs.core.seq(seq__27646_27650);if(temp__4092__auto___27659)
{var seq__27646_27660__$1 = temp__4092__auto___27659;if(cljs.core.chunked_seq_QMARK_(seq__27646_27660__$1))
{var c__4148__auto___27661 = cljs.core.chunk_first(seq__27646_27660__$1);{
var G__27662 = cljs.core.chunk_rest(seq__27646_27660__$1);
var G__27663 = c__4148__auto___27661;
var G__27664 = cljs.core.count(c__4148__auto___27661);
var G__27665 = 0;
seq__27646_27650 = G__27662;
chunk__27647_27651 = G__27663;
count__27648_27652 = G__27664;
i__27649_27653 = G__27665;
continue;
}
} else
{var node_27666 = cljs.core.first(seq__27646_27660__$1);goog.dom.classes.add(node_27666,class$);
{
var G__27667 = cljs.core.next(seq__27646_27660__$1);
var G__27668 = null;
var G__27669 = 0;
var G__27670 = 0;
seq__27646_27650 = G__27667;
chunk__27647_27651 = G__27668;
count__27648_27652 = G__27669;
i__27649_27653 = G__27670;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27675_27679 = cljs.core.seq(domina.nodes(content));var chunk__27676_27680 = null;var count__27677_27681 = 0;var i__27678_27682 = 0;while(true){
if((i__27678_27682 < count__27677_27681))
{var node_27683 = chunk__27676_27680.cljs$core$IIndexed$_nth$arity$2(null,i__27678_27682);goog.dom.classes.remove(node_27683,class$);
{
var G__27684 = seq__27675_27679;
var G__27685 = chunk__27676_27680;
var G__27686 = count__27677_27681;
var G__27687 = (i__27678_27682 + 1);
seq__27675_27679 = G__27684;
chunk__27676_27680 = G__27685;
count__27677_27681 = G__27686;
i__27678_27682 = G__27687;
continue;
}
} else
{var temp__4092__auto___27688 = cljs.core.seq(seq__27675_27679);if(temp__4092__auto___27688)
{var seq__27675_27689__$1 = temp__4092__auto___27688;if(cljs.core.chunked_seq_QMARK_(seq__27675_27689__$1))
{var c__4148__auto___27690 = cljs.core.chunk_first(seq__27675_27689__$1);{
var G__27691 = cljs.core.chunk_rest(seq__27675_27689__$1);
var G__27692 = c__4148__auto___27690;
var G__27693 = cljs.core.count(c__4148__auto___27690);
var G__27694 = 0;
seq__27675_27679 = G__27691;
chunk__27676_27680 = G__27692;
count__27677_27681 = G__27693;
i__27678_27682 = G__27694;
continue;
}
} else
{var node_27695 = cljs.core.first(seq__27675_27689__$1);goog.dom.classes.remove(node_27695,class$);
{
var G__27696 = cljs.core.next(seq__27675_27689__$1);
var G__27697 = null;
var G__27698 = 0;
var G__27699 = 0;
seq__27675_27679 = G__27696;
chunk__27676_27680 = G__27697;
count__27677_27681 = G__27698;
i__27678_27682 = G__27699;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27704_27708 = cljs.core.seq(domina.nodes(content));var chunk__27705_27709 = null;var count__27706_27710 = 0;var i__27707_27711 = 0;while(true){
if((i__27707_27711 < count__27706_27710))
{var node_27712 = chunk__27705_27709.cljs$core$IIndexed$_nth$arity$2(null,i__27707_27711);goog.dom.classes.toggle(node_27712,class$);
{
var G__27713 = seq__27704_27708;
var G__27714 = chunk__27705_27709;
var G__27715 = count__27706_27710;
var G__27716 = (i__27707_27711 + 1);
seq__27704_27708 = G__27713;
chunk__27705_27709 = G__27714;
count__27706_27710 = G__27715;
i__27707_27711 = G__27716;
continue;
}
} else
{var temp__4092__auto___27717 = cljs.core.seq(seq__27704_27708);if(temp__4092__auto___27717)
{var seq__27704_27718__$1 = temp__4092__auto___27717;if(cljs.core.chunked_seq_QMARK_(seq__27704_27718__$1))
{var c__4148__auto___27719 = cljs.core.chunk_first(seq__27704_27718__$1);{
var G__27720 = cljs.core.chunk_rest(seq__27704_27718__$1);
var G__27721 = c__4148__auto___27719;
var G__27722 = cljs.core.count(c__4148__auto___27719);
var G__27723 = 0;
seq__27704_27708 = G__27720;
chunk__27705_27709 = G__27721;
count__27706_27710 = G__27722;
i__27707_27711 = G__27723;
continue;
}
} else
{var node_27724 = cljs.core.first(seq__27704_27718__$1);goog.dom.classes.toggle(node_27724,class$);
{
var G__27725 = cljs.core.next(seq__27704_27718__$1);
var G__27726 = null;
var G__27727 = 0;
var G__27728 = 0;
seq__27704_27708 = G__27725;
chunk__27705_27709 = G__27726;
count__27706_27710 = G__27727;
i__27707_27711 = G__27728;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27737__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27733_27738 = cljs.core.seq(domina.nodes(content));var chunk__27734_27739 = null;var count__27735_27740 = 0;var i__27736_27741 = 0;while(true){
if((i__27736_27741 < count__27735_27740))
{var node_27742 = chunk__27734_27739.cljs$core$IIndexed$_nth$arity$2(null,i__27736_27741);goog.dom.classes.set(node_27742,classes_27737__$1);
{
var G__27743 = seq__27733_27738;
var G__27744 = chunk__27734_27739;
var G__27745 = count__27735_27740;
var G__27746 = (i__27736_27741 + 1);
seq__27733_27738 = G__27743;
chunk__27734_27739 = G__27744;
count__27735_27740 = G__27745;
i__27736_27741 = G__27746;
continue;
}
} else
{var temp__4092__auto___27747 = cljs.core.seq(seq__27733_27738);if(temp__4092__auto___27747)
{var seq__27733_27748__$1 = temp__4092__auto___27747;if(cljs.core.chunked_seq_QMARK_(seq__27733_27748__$1))
{var c__4148__auto___27749 = cljs.core.chunk_first(seq__27733_27748__$1);{
var G__27750 = cljs.core.chunk_rest(seq__27733_27748__$1);
var G__27751 = c__4148__auto___27749;
var G__27752 = cljs.core.count(c__4148__auto___27749);
var G__27753 = 0;
seq__27733_27738 = G__27750;
chunk__27734_27739 = G__27751;
count__27735_27740 = G__27752;
i__27736_27741 = G__27753;
continue;
}
} else
{var node_27754 = cljs.core.first(seq__27733_27748__$1);goog.dom.classes.set(node_27754,classes_27737__$1);
{
var G__27755 = cljs.core.next(seq__27733_27748__$1);
var G__27756 = null;
var G__27757 = 0;
var G__27758 = 0;
seq__27733_27738 = G__27755;
chunk__27734_27739 = G__27756;
count__27735_27740 = G__27757;
i__27736_27741 = G__27758;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27763_27767 = cljs.core.seq(domina.nodes(content));var chunk__27764_27768 = null;var count__27765_27769 = 0;var i__27766_27770 = 0;while(true){
if((i__27766_27770 < count__27765_27769))
{var node_27771 = chunk__27764_27768.cljs$core$IIndexed$_nth$arity$2(null,i__27766_27770);goog.dom.setTextContent(node_27771,value);
{
var G__27772 = seq__27763_27767;
var G__27773 = chunk__27764_27768;
var G__27774 = count__27765_27769;
var G__27775 = (i__27766_27770 + 1);
seq__27763_27767 = G__27772;
chunk__27764_27768 = G__27773;
count__27765_27769 = G__27774;
i__27766_27770 = G__27775;
continue;
}
} else
{var temp__4092__auto___27776 = cljs.core.seq(seq__27763_27767);if(temp__4092__auto___27776)
{var seq__27763_27777__$1 = temp__4092__auto___27776;if(cljs.core.chunked_seq_QMARK_(seq__27763_27777__$1))
{var c__4148__auto___27778 = cljs.core.chunk_first(seq__27763_27777__$1);{
var G__27779 = cljs.core.chunk_rest(seq__27763_27777__$1);
var G__27780 = c__4148__auto___27778;
var G__27781 = cljs.core.count(c__4148__auto___27778);
var G__27782 = 0;
seq__27763_27767 = G__27779;
chunk__27764_27768 = G__27780;
count__27765_27769 = G__27781;
i__27766_27770 = G__27782;
continue;
}
} else
{var node_27783 = cljs.core.first(seq__27763_27777__$1);goog.dom.setTextContent(node_27783,value);
{
var G__27784 = cljs.core.next(seq__27763_27777__$1);
var G__27785 = null;
var G__27786 = 0;
var G__27787 = 0;
seq__27763_27767 = G__27784;
chunk__27764_27768 = G__27785;
count__27765_27769 = G__27786;
i__27766_27770 = G__27787;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27792_27796 = cljs.core.seq(domina.nodes(content));var chunk__27793_27797 = null;var count__27794_27798 = 0;var i__27795_27799 = 0;while(true){
if((i__27795_27799 < count__27794_27798))
{var node_27800 = chunk__27793_27797.cljs$core$IIndexed$_nth$arity$2(null,i__27795_27799);goog.dom.forms.setValue(node_27800,value);
{
var G__27801 = seq__27792_27796;
var G__27802 = chunk__27793_27797;
var G__27803 = count__27794_27798;
var G__27804 = (i__27795_27799 + 1);
seq__27792_27796 = G__27801;
chunk__27793_27797 = G__27802;
count__27794_27798 = G__27803;
i__27795_27799 = G__27804;
continue;
}
} else
{var temp__4092__auto___27805 = cljs.core.seq(seq__27792_27796);if(temp__4092__auto___27805)
{var seq__27792_27806__$1 = temp__4092__auto___27805;if(cljs.core.chunked_seq_QMARK_(seq__27792_27806__$1))
{var c__4148__auto___27807 = cljs.core.chunk_first(seq__27792_27806__$1);{
var G__27808 = cljs.core.chunk_rest(seq__27792_27806__$1);
var G__27809 = c__4148__auto___27807;
var G__27810 = cljs.core.count(c__4148__auto___27807);
var G__27811 = 0;
seq__27792_27796 = G__27808;
chunk__27793_27797 = G__27809;
count__27794_27798 = G__27810;
i__27795_27799 = G__27811;
continue;
}
} else
{var node_27812 = cljs.core.first(seq__27792_27806__$1);goog.dom.forms.setValue(node_27812,value);
{
var G__27813 = cljs.core.next(seq__27792_27806__$1);
var G__27814 = null;
var G__27815 = 0;
var G__27816 = 0;
seq__27792_27796 = G__27813;
chunk__27793_27797 = G__27814;
count__27794_27798 = G__27815;
i__27795_27799 = G__27816;
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
{var value_27827 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27823_27828 = cljs.core.seq(domina.nodes(content));var chunk__27824_27829 = null;var count__27825_27830 = 0;var i__27826_27831 = 0;while(true){
if((i__27826_27831 < count__27825_27830))
{var node_27832 = chunk__27824_27829.cljs$core$IIndexed$_nth$arity$2(null,i__27826_27831);node_27832.innerHTML = value_27827;
{
var G__27833 = seq__27823_27828;
var G__27834 = chunk__27824_27829;
var G__27835 = count__27825_27830;
var G__27836 = (i__27826_27831 + 1);
seq__27823_27828 = G__27833;
chunk__27824_27829 = G__27834;
count__27825_27830 = G__27835;
i__27826_27831 = G__27836;
continue;
}
} else
{var temp__4092__auto___27837 = cljs.core.seq(seq__27823_27828);if(temp__4092__auto___27837)
{var seq__27823_27838__$1 = temp__4092__auto___27837;if(cljs.core.chunked_seq_QMARK_(seq__27823_27838__$1))
{var c__4148__auto___27839 = cljs.core.chunk_first(seq__27823_27838__$1);{
var G__27840 = cljs.core.chunk_rest(seq__27823_27838__$1);
var G__27841 = c__4148__auto___27839;
var G__27842 = cljs.core.count(c__4148__auto___27839);
var G__27843 = 0;
seq__27823_27828 = G__27840;
chunk__27824_27829 = G__27841;
count__27825_27830 = G__27842;
i__27826_27831 = G__27843;
continue;
}
} else
{var node_27844 = cljs.core.first(seq__27823_27838__$1);node_27844.innerHTML = value_27827;
{
var G__27845 = cljs.core.next(seq__27823_27838__$1);
var G__27846 = null;
var G__27847 = 0;
var G__27848 = 0;
seq__27823_27828 = G__27845;
chunk__27824_27829 = G__27846;
count__27825_27830 = G__27847;
i__27826_27831 = G__27848;
continue;
}
}
} else
{}
}
break;
}
}catch (e27822){if((e27822 instanceof Error))
{var e_27849 = e27822;domina.replace_children_BANG_(content,value_27827);
} else
{if(cljs.core.constant$keyword$223)
{throw e27822;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27856_27860 = cljs.core.seq(children);var chunk__27857_27861 = null;var count__27858_27862 = 0;var i__27859_27863 = 0;while(true){
if((i__27859_27863 < count__27858_27862))
{var child_27864 = chunk__27857_27861.cljs$core$IIndexed$_nth$arity$2(null,i__27859_27863);frag.appendChild(child_27864);
{
var G__27865 = seq__27856_27860;
var G__27866 = chunk__27857_27861;
var G__27867 = count__27858_27862;
var G__27868 = (i__27859_27863 + 1);
seq__27856_27860 = G__27865;
chunk__27857_27861 = G__27866;
count__27858_27862 = G__27867;
i__27859_27863 = G__27868;
continue;
}
} else
{var temp__4092__auto___27869 = cljs.core.seq(seq__27856_27860);if(temp__4092__auto___27869)
{var seq__27856_27870__$1 = temp__4092__auto___27869;if(cljs.core.chunked_seq_QMARK_(seq__27856_27870__$1))
{var c__4148__auto___27871 = cljs.core.chunk_first(seq__27856_27870__$1);{
var G__27872 = cljs.core.chunk_rest(seq__27856_27870__$1);
var G__27873 = c__4148__auto___27871;
var G__27874 = cljs.core.count(c__4148__auto___27871);
var G__27875 = 0;
seq__27856_27860 = G__27872;
chunk__27857_27861 = G__27873;
count__27858_27862 = G__27874;
i__27859_27863 = G__27875;
continue;
}
} else
{var child_27876 = cljs.core.first(seq__27856_27870__$1);frag.appendChild(child_27876);
{
var G__27877 = cljs.core.next(seq__27856_27870__$1);
var G__27878 = null;
var G__27879 = 0;
var G__27880 = 0;
seq__27856_27860 = G__27877;
chunk__27857_27861 = G__27878;
count__27858_27862 = G__27879;
i__27859_27863 = G__27880;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27850_SHARP_,p2__27851_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27850_SHARP_,p2__27851_SHARP_) : f.call(null,p1__27850_SHARP_,p2__27851_SHARP_));
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
{if((function (){var G__27882 = list_thing;if(G__27882)
{var bit__4050__auto__ = (G__27882.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27882.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27882.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27882);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27882);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$224)
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
{if((function (){var G__27883 = content;if(G__27883)
{var bit__4050__auto__ = (G__27883.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27883.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27883);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27883);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$224)
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
{if((function (){var G__27884 = content;if(G__27884)
{var bit__4050__auto__ = (G__27884.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27884.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27884);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$224)
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
