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
var opt_wrapper_19441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19442 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19443 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$7,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19442,table_section_wrapper_19442,opt_wrapper_19441,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19443,table_section_wrapper_19442,cell_wrapper_19443,opt_wrapper_19441,table_section_wrapper_19442,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19442]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19448 = cljs.core.seq(tbody);var chunk__19449 = null;var count__19450 = 0;var i__19451 = 0;while(true){
if((i__19451 < count__19450))
{var child = chunk__19449.cljs$core$IIndexed$_nth$arity$2(null,i__19451);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19452 = seq__19448;
var G__19453 = chunk__19449;
var G__19454 = count__19450;
var G__19455 = (i__19451 + 1);
seq__19448 = G__19452;
chunk__19449 = G__19453;
count__19450 = G__19454;
i__19451 = G__19455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19448);if(temp__4092__auto__)
{var seq__19448__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19448__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__19448__$1);{
var G__19456 = cljs.core.chunk_rest(seq__19448__$1);
var G__19457 = c__4015__auto__;
var G__19458 = cljs.core.count(c__4015__auto__);
var G__19459 = 0;
seq__19448 = G__19456;
chunk__19449 = G__19457;
count__19450 = G__19458;
i__19451 = G__19459;
continue;
}
} else
{var child = cljs.core.first(seq__19448__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19460 = cljs.core.next(seq__19448__$1);
var G__19461 = null;
var G__19462 = 0;
var G__19463 = 0;
seq__19448 = G__19460;
chunk__19449 = G__19461;
count__19450 = G__19462;
i__19451 = G__19463;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19465 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19465,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19465,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19465,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19466 = wrapper.lastChild;
var G__19467 = (level - 1);
wrapper = G__19466;
level = G__19467;
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
domina.DomContent = (function (){var obj19469 = {};return obj19469;
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
log_debug.cljs$lang$applyTo = (function (arglist__19470){
var mesg = cljs.core.seq(arglist__19470);
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
log.cljs$lang$applyTo = (function (arglist__19471){
var mesg = cljs.core.seq(arglist__19471);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19472){
var contents = cljs.core.seq(arglist__19472);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19473_SHARP_){return p1__19473_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19474_SHARP_,p2__19475_SHARP_){return goog.dom.insertChildAt(p1__19474_SHARP_,p2__19475_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__19474_SHARP_,p2__19475_SHARP_){return goog.dom.insertChildAt(p1__19474_SHARP_,p2__19475_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19477_SHARP_,p2__19476_SHARP_){return goog.dom.insertSiblingBefore(p2__19476_SHARP_,p1__19477_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19477_SHARP_,p2__19476_SHARP_){return goog.dom.insertSiblingBefore(p2__19476_SHARP_,p1__19477_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19479_SHARP_,p2__19478_SHARP_){return goog.dom.insertSiblingAfter(p2__19478_SHARP_,p1__19479_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19479_SHARP_,p2__19478_SHARP_){return goog.dom.insertSiblingAfter(p2__19478_SHARP_,p1__19479_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__19481_SHARP_,p2__19480_SHARP_){return goog.dom.replaceNode(p2__19480_SHARP_,p1__19481_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__19481_SHARP_,p2__19480_SHARP_){return goog.dom.replaceNode(p2__19480_SHARP_,p1__19481_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19486_19490 = cljs.core.seq(domina.nodes(content));var chunk__19487_19491 = null;var count__19488_19492 = 0;var i__19489_19493 = 0;while(true){
if((i__19489_19493 < count__19488_19492))
{var n_19494 = chunk__19487_19491.cljs$core$IIndexed$_nth$arity$2(null,i__19489_19493);goog.style.setStyle(n_19494,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19495 = seq__19486_19490;
var G__19496 = chunk__19487_19491;
var G__19497 = count__19488_19492;
var G__19498 = (i__19489_19493 + 1);
seq__19486_19490 = G__19495;
chunk__19487_19491 = G__19496;
count__19488_19492 = G__19497;
i__19489_19493 = G__19498;
continue;
}
} else
{var temp__4092__auto___19499 = cljs.core.seq(seq__19486_19490);if(temp__4092__auto___19499)
{var seq__19486_19500__$1 = temp__4092__auto___19499;if(cljs.core.chunked_seq_QMARK_(seq__19486_19500__$1))
{var c__4015__auto___19501 = cljs.core.chunk_first(seq__19486_19500__$1);{
var G__19502 = cljs.core.chunk_rest(seq__19486_19500__$1);
var G__19503 = c__4015__auto___19501;
var G__19504 = cljs.core.count(c__4015__auto___19501);
var G__19505 = 0;
seq__19486_19490 = G__19502;
chunk__19487_19491 = G__19503;
count__19488_19492 = G__19504;
i__19489_19493 = G__19505;
continue;
}
} else
{var n_19506 = cljs.core.first(seq__19486_19500__$1);goog.style.setStyle(n_19506,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19507 = cljs.core.next(seq__19486_19500__$1);
var G__19508 = null;
var G__19509 = 0;
var G__19510 = 0;
seq__19486_19490 = G__19507;
chunk__19487_19491 = G__19508;
count__19488_19492 = G__19509;
i__19489_19493 = G__19510;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19511){
var content = cljs.core.first(arglist__19511);
arglist__19511 = cljs.core.next(arglist__19511);
var name = cljs.core.first(arglist__19511);
var value = cljs.core.rest(arglist__19511);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19516_19520 = cljs.core.seq(domina.nodes(content));var chunk__19517_19521 = null;var count__19518_19522 = 0;var i__19519_19523 = 0;while(true){
if((i__19519_19523 < count__19518_19522))
{var n_19524 = chunk__19517_19521.cljs$core$IIndexed$_nth$arity$2(null,i__19519_19523);n_19524.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19525 = seq__19516_19520;
var G__19526 = chunk__19517_19521;
var G__19527 = count__19518_19522;
var G__19528 = (i__19519_19523 + 1);
seq__19516_19520 = G__19525;
chunk__19517_19521 = G__19526;
count__19518_19522 = G__19527;
i__19519_19523 = G__19528;
continue;
}
} else
{var temp__4092__auto___19529 = cljs.core.seq(seq__19516_19520);if(temp__4092__auto___19529)
{var seq__19516_19530__$1 = temp__4092__auto___19529;if(cljs.core.chunked_seq_QMARK_(seq__19516_19530__$1))
{var c__4015__auto___19531 = cljs.core.chunk_first(seq__19516_19530__$1);{
var G__19532 = cljs.core.chunk_rest(seq__19516_19530__$1);
var G__19533 = c__4015__auto___19531;
var G__19534 = cljs.core.count(c__4015__auto___19531);
var G__19535 = 0;
seq__19516_19520 = G__19532;
chunk__19517_19521 = G__19533;
count__19518_19522 = G__19534;
i__19519_19523 = G__19535;
continue;
}
} else
{var n_19536 = cljs.core.first(seq__19516_19530__$1);n_19536.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__19537 = cljs.core.next(seq__19516_19530__$1);
var G__19538 = null;
var G__19539 = 0;
var G__19540 = 0;
seq__19516_19520 = G__19537;
chunk__19517_19521 = G__19538;
count__19518_19522 = G__19539;
i__19519_19523 = G__19540;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19541){
var content = cljs.core.first(arglist__19541);
arglist__19541 = cljs.core.next(arglist__19541);
var name = cljs.core.first(arglist__19541);
var value = cljs.core.rest(arglist__19541);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19546_19550 = cljs.core.seq(domina.nodes(content));var chunk__19547_19551 = null;var count__19548_19552 = 0;var i__19549_19553 = 0;while(true){
if((i__19549_19553 < count__19548_19552))
{var n_19554 = chunk__19547_19551.cljs$core$IIndexed$_nth$arity$2(null,i__19549_19553);n_19554.removeAttribute(cljs.core.name(name));
{
var G__19555 = seq__19546_19550;
var G__19556 = chunk__19547_19551;
var G__19557 = count__19548_19552;
var G__19558 = (i__19549_19553 + 1);
seq__19546_19550 = G__19555;
chunk__19547_19551 = G__19556;
count__19548_19552 = G__19557;
i__19549_19553 = G__19558;
continue;
}
} else
{var temp__4092__auto___19559 = cljs.core.seq(seq__19546_19550);if(temp__4092__auto___19559)
{var seq__19546_19560__$1 = temp__4092__auto___19559;if(cljs.core.chunked_seq_QMARK_(seq__19546_19560__$1))
{var c__4015__auto___19561 = cljs.core.chunk_first(seq__19546_19560__$1);{
var G__19562 = cljs.core.chunk_rest(seq__19546_19560__$1);
var G__19563 = c__4015__auto___19561;
var G__19564 = cljs.core.count(c__4015__auto___19561);
var G__19565 = 0;
seq__19546_19550 = G__19562;
chunk__19547_19551 = G__19563;
count__19548_19552 = G__19564;
i__19549_19553 = G__19565;
continue;
}
} else
{var n_19566 = cljs.core.first(seq__19546_19560__$1);n_19566.removeAttribute(cljs.core.name(name));
{
var G__19567 = cljs.core.next(seq__19546_19560__$1);
var G__19568 = null;
var G__19569 = 0;
var G__19570 = 0;
seq__19546_19550 = G__19567;
chunk__19547_19551 = G__19568;
count__19548_19552 = G__19569;
i__19549_19553 = G__19570;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__19572 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19572,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19572,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19573_SHARP_){var attr = attrs__$1.item(p1__19573_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19580_19586 = cljs.core.seq(styles);var chunk__19581_19587 = null;var count__19582_19588 = 0;var i__19583_19589 = 0;while(true){
if((i__19583_19589 < count__19582_19588))
{var vec__19584_19590 = chunk__19581_19587.cljs$core$IIndexed$_nth$arity$2(null,i__19583_19589);var name_19591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584_19590,0,null);var value_19592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19584_19590,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19591,cljs.core.array_seq([value_19592], 0));
{
var G__19593 = seq__19580_19586;
var G__19594 = chunk__19581_19587;
var G__19595 = count__19582_19588;
var G__19596 = (i__19583_19589 + 1);
seq__19580_19586 = G__19593;
chunk__19581_19587 = G__19594;
count__19582_19588 = G__19595;
i__19583_19589 = G__19596;
continue;
}
} else
{var temp__4092__auto___19597 = cljs.core.seq(seq__19580_19586);if(temp__4092__auto___19597)
{var seq__19580_19598__$1 = temp__4092__auto___19597;if(cljs.core.chunked_seq_QMARK_(seq__19580_19598__$1))
{var c__4015__auto___19599 = cljs.core.chunk_first(seq__19580_19598__$1);{
var G__19600 = cljs.core.chunk_rest(seq__19580_19598__$1);
var G__19601 = c__4015__auto___19599;
var G__19602 = cljs.core.count(c__4015__auto___19599);
var G__19603 = 0;
seq__19580_19586 = G__19600;
chunk__19581_19587 = G__19601;
count__19582_19588 = G__19602;
i__19583_19589 = G__19603;
continue;
}
} else
{var vec__19585_19604 = cljs.core.first(seq__19580_19598__$1);var name_19605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585_19604,0,null);var value_19606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585_19604,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19605,cljs.core.array_seq([value_19606], 0));
{
var G__19607 = cljs.core.next(seq__19580_19598__$1);
var G__19608 = null;
var G__19609 = 0;
var G__19610 = 0;
seq__19580_19586 = G__19607;
chunk__19581_19587 = G__19608;
count__19582_19588 = G__19609;
i__19583_19589 = G__19610;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19617_19623 = cljs.core.seq(attrs);var chunk__19618_19624 = null;var count__19619_19625 = 0;var i__19620_19626 = 0;while(true){
if((i__19620_19626 < count__19619_19625))
{var vec__19621_19627 = chunk__19618_19624.cljs$core$IIndexed$_nth$arity$2(null,i__19620_19626);var name_19628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621_19627,0,null);var value_19629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621_19627,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19628,cljs.core.array_seq([value_19629], 0));
{
var G__19630 = seq__19617_19623;
var G__19631 = chunk__19618_19624;
var G__19632 = count__19619_19625;
var G__19633 = (i__19620_19626 + 1);
seq__19617_19623 = G__19630;
chunk__19618_19624 = G__19631;
count__19619_19625 = G__19632;
i__19620_19626 = G__19633;
continue;
}
} else
{var temp__4092__auto___19634 = cljs.core.seq(seq__19617_19623);if(temp__4092__auto___19634)
{var seq__19617_19635__$1 = temp__4092__auto___19634;if(cljs.core.chunked_seq_QMARK_(seq__19617_19635__$1))
{var c__4015__auto___19636 = cljs.core.chunk_first(seq__19617_19635__$1);{
var G__19637 = cljs.core.chunk_rest(seq__19617_19635__$1);
var G__19638 = c__4015__auto___19636;
var G__19639 = cljs.core.count(c__4015__auto___19636);
var G__19640 = 0;
seq__19617_19623 = G__19637;
chunk__19618_19624 = G__19638;
count__19619_19625 = G__19639;
i__19620_19626 = G__19640;
continue;
}
} else
{var vec__19622_19641 = cljs.core.first(seq__19617_19635__$1);var name_19642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19622_19641,0,null);var value_19643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19622_19641,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19642,cljs.core.array_seq([value_19643], 0));
{
var G__19644 = cljs.core.next(seq__19617_19635__$1);
var G__19645 = null;
var G__19646 = 0;
var G__19647 = 0;
seq__19617_19623 = G__19644;
chunk__19618_19624 = G__19645;
count__19619_19625 = G__19646;
i__19620_19626 = G__19647;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19652_19656 = cljs.core.seq(domina.nodes(content));var chunk__19653_19657 = null;var count__19654_19658 = 0;var i__19655_19659 = 0;while(true){
if((i__19655_19659 < count__19654_19658))
{var node_19660 = chunk__19653_19657.cljs$core$IIndexed$_nth$arity$2(null,i__19655_19659);goog.dom.classes.add(node_19660,class$);
{
var G__19661 = seq__19652_19656;
var G__19662 = chunk__19653_19657;
var G__19663 = count__19654_19658;
var G__19664 = (i__19655_19659 + 1);
seq__19652_19656 = G__19661;
chunk__19653_19657 = G__19662;
count__19654_19658 = G__19663;
i__19655_19659 = G__19664;
continue;
}
} else
{var temp__4092__auto___19665 = cljs.core.seq(seq__19652_19656);if(temp__4092__auto___19665)
{var seq__19652_19666__$1 = temp__4092__auto___19665;if(cljs.core.chunked_seq_QMARK_(seq__19652_19666__$1))
{var c__4015__auto___19667 = cljs.core.chunk_first(seq__19652_19666__$1);{
var G__19668 = cljs.core.chunk_rest(seq__19652_19666__$1);
var G__19669 = c__4015__auto___19667;
var G__19670 = cljs.core.count(c__4015__auto___19667);
var G__19671 = 0;
seq__19652_19656 = G__19668;
chunk__19653_19657 = G__19669;
count__19654_19658 = G__19670;
i__19655_19659 = G__19671;
continue;
}
} else
{var node_19672 = cljs.core.first(seq__19652_19666__$1);goog.dom.classes.add(node_19672,class$);
{
var G__19673 = cljs.core.next(seq__19652_19666__$1);
var G__19674 = null;
var G__19675 = 0;
var G__19676 = 0;
seq__19652_19656 = G__19673;
chunk__19653_19657 = G__19674;
count__19654_19658 = G__19675;
i__19655_19659 = G__19676;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19681_19685 = cljs.core.seq(domina.nodes(content));var chunk__19682_19686 = null;var count__19683_19687 = 0;var i__19684_19688 = 0;while(true){
if((i__19684_19688 < count__19683_19687))
{var node_19689 = chunk__19682_19686.cljs$core$IIndexed$_nth$arity$2(null,i__19684_19688);goog.dom.classes.remove(node_19689,class$);
{
var G__19690 = seq__19681_19685;
var G__19691 = chunk__19682_19686;
var G__19692 = count__19683_19687;
var G__19693 = (i__19684_19688 + 1);
seq__19681_19685 = G__19690;
chunk__19682_19686 = G__19691;
count__19683_19687 = G__19692;
i__19684_19688 = G__19693;
continue;
}
} else
{var temp__4092__auto___19694 = cljs.core.seq(seq__19681_19685);if(temp__4092__auto___19694)
{var seq__19681_19695__$1 = temp__4092__auto___19694;if(cljs.core.chunked_seq_QMARK_(seq__19681_19695__$1))
{var c__4015__auto___19696 = cljs.core.chunk_first(seq__19681_19695__$1);{
var G__19697 = cljs.core.chunk_rest(seq__19681_19695__$1);
var G__19698 = c__4015__auto___19696;
var G__19699 = cljs.core.count(c__4015__auto___19696);
var G__19700 = 0;
seq__19681_19685 = G__19697;
chunk__19682_19686 = G__19698;
count__19683_19687 = G__19699;
i__19684_19688 = G__19700;
continue;
}
} else
{var node_19701 = cljs.core.first(seq__19681_19695__$1);goog.dom.classes.remove(node_19701,class$);
{
var G__19702 = cljs.core.next(seq__19681_19695__$1);
var G__19703 = null;
var G__19704 = 0;
var G__19705 = 0;
seq__19681_19685 = G__19702;
chunk__19682_19686 = G__19703;
count__19683_19687 = G__19704;
i__19684_19688 = G__19705;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19710_19714 = cljs.core.seq(domina.nodes(content));var chunk__19711_19715 = null;var count__19712_19716 = 0;var i__19713_19717 = 0;while(true){
if((i__19713_19717 < count__19712_19716))
{var node_19718 = chunk__19711_19715.cljs$core$IIndexed$_nth$arity$2(null,i__19713_19717);goog.dom.classes.toggle(node_19718,class$);
{
var G__19719 = seq__19710_19714;
var G__19720 = chunk__19711_19715;
var G__19721 = count__19712_19716;
var G__19722 = (i__19713_19717 + 1);
seq__19710_19714 = G__19719;
chunk__19711_19715 = G__19720;
count__19712_19716 = G__19721;
i__19713_19717 = G__19722;
continue;
}
} else
{var temp__4092__auto___19723 = cljs.core.seq(seq__19710_19714);if(temp__4092__auto___19723)
{var seq__19710_19724__$1 = temp__4092__auto___19723;if(cljs.core.chunked_seq_QMARK_(seq__19710_19724__$1))
{var c__4015__auto___19725 = cljs.core.chunk_first(seq__19710_19724__$1);{
var G__19726 = cljs.core.chunk_rest(seq__19710_19724__$1);
var G__19727 = c__4015__auto___19725;
var G__19728 = cljs.core.count(c__4015__auto___19725);
var G__19729 = 0;
seq__19710_19714 = G__19726;
chunk__19711_19715 = G__19727;
count__19712_19716 = G__19728;
i__19713_19717 = G__19729;
continue;
}
} else
{var node_19730 = cljs.core.first(seq__19710_19724__$1);goog.dom.classes.toggle(node_19730,class$);
{
var G__19731 = cljs.core.next(seq__19710_19724__$1);
var G__19732 = null;
var G__19733 = 0;
var G__19734 = 0;
seq__19710_19714 = G__19731;
chunk__19711_19715 = G__19732;
count__19712_19716 = G__19733;
i__19713_19717 = G__19734;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19743__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__19739_19744 = cljs.core.seq(domina.nodes(content));var chunk__19740_19745 = null;var count__19741_19746 = 0;var i__19742_19747 = 0;while(true){
if((i__19742_19747 < count__19741_19746))
{var node_19748 = chunk__19740_19745.cljs$core$IIndexed$_nth$arity$2(null,i__19742_19747);goog.dom.classes.set(node_19748,classes_19743__$1);
{
var G__19749 = seq__19739_19744;
var G__19750 = chunk__19740_19745;
var G__19751 = count__19741_19746;
var G__19752 = (i__19742_19747 + 1);
seq__19739_19744 = G__19749;
chunk__19740_19745 = G__19750;
count__19741_19746 = G__19751;
i__19742_19747 = G__19752;
continue;
}
} else
{var temp__4092__auto___19753 = cljs.core.seq(seq__19739_19744);if(temp__4092__auto___19753)
{var seq__19739_19754__$1 = temp__4092__auto___19753;if(cljs.core.chunked_seq_QMARK_(seq__19739_19754__$1))
{var c__4015__auto___19755 = cljs.core.chunk_first(seq__19739_19754__$1);{
var G__19756 = cljs.core.chunk_rest(seq__19739_19754__$1);
var G__19757 = c__4015__auto___19755;
var G__19758 = cljs.core.count(c__4015__auto___19755);
var G__19759 = 0;
seq__19739_19744 = G__19756;
chunk__19740_19745 = G__19757;
count__19741_19746 = G__19758;
i__19742_19747 = G__19759;
continue;
}
} else
{var node_19760 = cljs.core.first(seq__19739_19754__$1);goog.dom.classes.set(node_19760,classes_19743__$1);
{
var G__19761 = cljs.core.next(seq__19739_19754__$1);
var G__19762 = null;
var G__19763 = 0;
var G__19764 = 0;
seq__19739_19744 = G__19761;
chunk__19740_19745 = G__19762;
count__19741_19746 = G__19763;
i__19742_19747 = G__19764;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19769_19773 = cljs.core.seq(domina.nodes(content));var chunk__19770_19774 = null;var count__19771_19775 = 0;var i__19772_19776 = 0;while(true){
if((i__19772_19776 < count__19771_19775))
{var node_19777 = chunk__19770_19774.cljs$core$IIndexed$_nth$arity$2(null,i__19772_19776);goog.dom.setTextContent(node_19777,value);
{
var G__19778 = seq__19769_19773;
var G__19779 = chunk__19770_19774;
var G__19780 = count__19771_19775;
var G__19781 = (i__19772_19776 + 1);
seq__19769_19773 = G__19778;
chunk__19770_19774 = G__19779;
count__19771_19775 = G__19780;
i__19772_19776 = G__19781;
continue;
}
} else
{var temp__4092__auto___19782 = cljs.core.seq(seq__19769_19773);if(temp__4092__auto___19782)
{var seq__19769_19783__$1 = temp__4092__auto___19782;if(cljs.core.chunked_seq_QMARK_(seq__19769_19783__$1))
{var c__4015__auto___19784 = cljs.core.chunk_first(seq__19769_19783__$1);{
var G__19785 = cljs.core.chunk_rest(seq__19769_19783__$1);
var G__19786 = c__4015__auto___19784;
var G__19787 = cljs.core.count(c__4015__auto___19784);
var G__19788 = 0;
seq__19769_19773 = G__19785;
chunk__19770_19774 = G__19786;
count__19771_19775 = G__19787;
i__19772_19776 = G__19788;
continue;
}
} else
{var node_19789 = cljs.core.first(seq__19769_19783__$1);goog.dom.setTextContent(node_19789,value);
{
var G__19790 = cljs.core.next(seq__19769_19783__$1);
var G__19791 = null;
var G__19792 = 0;
var G__19793 = 0;
seq__19769_19773 = G__19790;
chunk__19770_19774 = G__19791;
count__19771_19775 = G__19792;
i__19772_19776 = G__19793;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19798_19802 = cljs.core.seq(domina.nodes(content));var chunk__19799_19803 = null;var count__19800_19804 = 0;var i__19801_19805 = 0;while(true){
if((i__19801_19805 < count__19800_19804))
{var node_19806 = chunk__19799_19803.cljs$core$IIndexed$_nth$arity$2(null,i__19801_19805);goog.dom.forms.setValue(node_19806,value);
{
var G__19807 = seq__19798_19802;
var G__19808 = chunk__19799_19803;
var G__19809 = count__19800_19804;
var G__19810 = (i__19801_19805 + 1);
seq__19798_19802 = G__19807;
chunk__19799_19803 = G__19808;
count__19800_19804 = G__19809;
i__19801_19805 = G__19810;
continue;
}
} else
{var temp__4092__auto___19811 = cljs.core.seq(seq__19798_19802);if(temp__4092__auto___19811)
{var seq__19798_19812__$1 = temp__4092__auto___19811;if(cljs.core.chunked_seq_QMARK_(seq__19798_19812__$1))
{var c__4015__auto___19813 = cljs.core.chunk_first(seq__19798_19812__$1);{
var G__19814 = cljs.core.chunk_rest(seq__19798_19812__$1);
var G__19815 = c__4015__auto___19813;
var G__19816 = cljs.core.count(c__4015__auto___19813);
var G__19817 = 0;
seq__19798_19802 = G__19814;
chunk__19799_19803 = G__19815;
count__19800_19804 = G__19816;
i__19801_19805 = G__19817;
continue;
}
} else
{var node_19818 = cljs.core.first(seq__19798_19812__$1);goog.dom.forms.setValue(node_19818,value);
{
var G__19819 = cljs.core.next(seq__19798_19812__$1);
var G__19820 = null;
var G__19821 = 0;
var G__19822 = 0;
seq__19798_19802 = G__19819;
chunk__19799_19803 = G__19820;
count__19800_19804 = G__19821;
i__19801_19805 = G__19822;
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
{var value_19833 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19829_19834 = cljs.core.seq(domina.nodes(content));var chunk__19830_19835 = null;var count__19831_19836 = 0;var i__19832_19837 = 0;while(true){
if((i__19832_19837 < count__19831_19836))
{var node_19838 = chunk__19830_19835.cljs$core$IIndexed$_nth$arity$2(null,i__19832_19837);node_19838.innerHTML = value_19833;
{
var G__19839 = seq__19829_19834;
var G__19840 = chunk__19830_19835;
var G__19841 = count__19831_19836;
var G__19842 = (i__19832_19837 + 1);
seq__19829_19834 = G__19839;
chunk__19830_19835 = G__19840;
count__19831_19836 = G__19841;
i__19832_19837 = G__19842;
continue;
}
} else
{var temp__4092__auto___19843 = cljs.core.seq(seq__19829_19834);if(temp__4092__auto___19843)
{var seq__19829_19844__$1 = temp__4092__auto___19843;if(cljs.core.chunked_seq_QMARK_(seq__19829_19844__$1))
{var c__4015__auto___19845 = cljs.core.chunk_first(seq__19829_19844__$1);{
var G__19846 = cljs.core.chunk_rest(seq__19829_19844__$1);
var G__19847 = c__4015__auto___19845;
var G__19848 = cljs.core.count(c__4015__auto___19845);
var G__19849 = 0;
seq__19829_19834 = G__19846;
chunk__19830_19835 = G__19847;
count__19831_19836 = G__19848;
i__19832_19837 = G__19849;
continue;
}
} else
{var node_19850 = cljs.core.first(seq__19829_19844__$1);node_19850.innerHTML = value_19833;
{
var G__19851 = cljs.core.next(seq__19829_19844__$1);
var G__19852 = null;
var G__19853 = 0;
var G__19854 = 0;
seq__19829_19834 = G__19851;
chunk__19830_19835 = G__19852;
count__19831_19836 = G__19853;
i__19832_19837 = G__19854;
continue;
}
}
} else
{}
}
break;
}
}catch (e19828){if((e19828 instanceof Error))
{var e_19855 = e19828;domina.replace_children_BANG_(content,value_19833);
} else
{if(cljs.core.constant$keyword$6)
{throw e19828;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19862_19866 = cljs.core.seq(children);var chunk__19863_19867 = null;var count__19864_19868 = 0;var i__19865_19869 = 0;while(true){
if((i__19865_19869 < count__19864_19868))
{var child_19870 = chunk__19863_19867.cljs$core$IIndexed$_nth$arity$2(null,i__19865_19869);frag.appendChild(child_19870);
{
var G__19871 = seq__19862_19866;
var G__19872 = chunk__19863_19867;
var G__19873 = count__19864_19868;
var G__19874 = (i__19865_19869 + 1);
seq__19862_19866 = G__19871;
chunk__19863_19867 = G__19872;
count__19864_19868 = G__19873;
i__19865_19869 = G__19874;
continue;
}
} else
{var temp__4092__auto___19875 = cljs.core.seq(seq__19862_19866);if(temp__4092__auto___19875)
{var seq__19862_19876__$1 = temp__4092__auto___19875;if(cljs.core.chunked_seq_QMARK_(seq__19862_19876__$1))
{var c__4015__auto___19877 = cljs.core.chunk_first(seq__19862_19876__$1);{
var G__19878 = cljs.core.chunk_rest(seq__19862_19876__$1);
var G__19879 = c__4015__auto___19877;
var G__19880 = cljs.core.count(c__4015__auto___19877);
var G__19881 = 0;
seq__19862_19866 = G__19878;
chunk__19863_19867 = G__19879;
count__19864_19868 = G__19880;
i__19865_19869 = G__19881;
continue;
}
} else
{var child_19882 = cljs.core.first(seq__19862_19876__$1);frag.appendChild(child_19882);
{
var G__19883 = cljs.core.next(seq__19862_19876__$1);
var G__19884 = null;
var G__19885 = 0;
var G__19886 = 0;
seq__19862_19866 = G__19883;
chunk__19863_19867 = G__19884;
count__19864_19868 = G__19885;
i__19865_19869 = G__19886;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__19856_SHARP_,p2__19857_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__19856_SHARP_,p2__19857_SHARP_) : f.call(null,p1__19856_SHARP_,p2__19857_SHARP_));
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
{if((function (){var G__19888 = list_thing;if(G__19888)
{var bit__3917__auto__ = (G__19888.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19888.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19888.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19888);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19888);
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
{if((function (){var G__19889 = content;if(G__19889)
{var bit__3917__auto__ = (G__19889.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19889.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19889.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19889);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19889);
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
{if((function (){var G__19890 = content;if(G__19890)
{var bit__3917__auto__ = (G__19890.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19890.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19890.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19890);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__19890);
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
