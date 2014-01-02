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
var opt_wrapper_32570 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$63,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32571,table_section_wrapper_32571,opt_wrapper_32570,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32572,table_section_wrapper_32571,cell_wrapper_32572,opt_wrapper_32570,table_section_wrapper_32571,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32571]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32577 = cljs.core.seq(tbody);var chunk__32578 = null;var count__32579 = 0;var i__32580 = 0;while(true){
if((i__32580 < count__32579))
{var child = chunk__32578.cljs$core$IIndexed$_nth$arity$2(null,i__32580);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32581 = seq__32577;
var G__32582 = chunk__32578;
var G__32583 = count__32579;
var G__32584 = (i__32580 + 1);
seq__32577 = G__32581;
chunk__32578 = G__32582;
count__32579 = G__32583;
i__32580 = G__32584;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__32577);if(temp__4092__auto__)
{var seq__32577__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__32577__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__32577__$1);{
var G__32585 = cljs.core.chunk_rest(seq__32577__$1);
var G__32586 = c__4015__auto__;
var G__32587 = cljs.core.count(c__4015__auto__);
var G__32588 = 0;
seq__32577 = G__32585;
chunk__32578 = G__32586;
count__32579 = G__32587;
i__32580 = G__32588;
continue;
}
} else
{var child = cljs.core.first(seq__32577__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32589 = cljs.core.next(seq__32577__$1);
var G__32590 = null;
var G__32591 = 0;
var G__32592 = 0;
seq__32577 = G__32589;
chunk__32578 = G__32590;
count__32579 = G__32591;
i__32580 = G__32592;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__32594 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32594,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32594,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32594,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__32595 = wrapper.lastChild;
var G__32596 = (level - 1);
wrapper = G__32595;
level = G__32596;
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
domina.DomContent = (function (){var obj32598 = {};return obj32598;
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
log_debug.cljs$lang$applyTo = (function (arglist__32599){
var mesg = cljs.core.seq(arglist__32599);
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
log.cljs$lang$applyTo = (function (arglist__32600){
var mesg = cljs.core.seq(arglist__32600);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32601){
var contents = cljs.core.seq(arglist__32601);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32602_SHARP_){return p1__32602_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__32603_SHARP_,p2__32604_SHARP_){return goog.dom.insertChildAt(p1__32603_SHARP_,p2__32604_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__32603_SHARP_,p2__32604_SHARP_){return goog.dom.insertChildAt(p1__32603_SHARP_,p2__32604_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__32606_SHARP_,p2__32605_SHARP_){return goog.dom.insertSiblingBefore(p2__32605_SHARP_,p1__32606_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__32606_SHARP_,p2__32605_SHARP_){return goog.dom.insertSiblingBefore(p2__32605_SHARP_,p1__32606_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__32608_SHARP_,p2__32607_SHARP_){return goog.dom.insertSiblingAfter(p2__32607_SHARP_,p1__32608_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__32608_SHARP_,p2__32607_SHARP_){return goog.dom.insertSiblingAfter(p2__32607_SHARP_,p1__32608_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__32610_SHARP_,p2__32609_SHARP_){return goog.dom.replaceNode(p2__32609_SHARP_,p1__32610_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__32610_SHARP_,p2__32609_SHARP_){return goog.dom.replaceNode(p2__32609_SHARP_,p1__32610_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32615_32619 = cljs.core.seq(domina.nodes(content));var chunk__32616_32620 = null;var count__32617_32621 = 0;var i__32618_32622 = 0;while(true){
if((i__32618_32622 < count__32617_32621))
{var n_32623 = chunk__32616_32620.cljs$core$IIndexed$_nth$arity$2(null,i__32618_32622);goog.style.setStyle(n_32623,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__32624 = seq__32615_32619;
var G__32625 = chunk__32616_32620;
var G__32626 = count__32617_32621;
var G__32627 = (i__32618_32622 + 1);
seq__32615_32619 = G__32624;
chunk__32616_32620 = G__32625;
count__32617_32621 = G__32626;
i__32618_32622 = G__32627;
continue;
}
} else
{var temp__4092__auto___32628 = cljs.core.seq(seq__32615_32619);if(temp__4092__auto___32628)
{var seq__32615_32629__$1 = temp__4092__auto___32628;if(cljs.core.chunked_seq_QMARK_(seq__32615_32629__$1))
{var c__4015__auto___32630 = cljs.core.chunk_first(seq__32615_32629__$1);{
var G__32631 = cljs.core.chunk_rest(seq__32615_32629__$1);
var G__32632 = c__4015__auto___32630;
var G__32633 = cljs.core.count(c__4015__auto___32630);
var G__32634 = 0;
seq__32615_32619 = G__32631;
chunk__32616_32620 = G__32632;
count__32617_32621 = G__32633;
i__32618_32622 = G__32634;
continue;
}
} else
{var n_32635 = cljs.core.first(seq__32615_32629__$1);goog.style.setStyle(n_32635,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__32636 = cljs.core.next(seq__32615_32629__$1);
var G__32637 = null;
var G__32638 = 0;
var G__32639 = 0;
seq__32615_32619 = G__32636;
chunk__32616_32620 = G__32637;
count__32617_32621 = G__32638;
i__32618_32622 = G__32639;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32640){
var content = cljs.core.first(arglist__32640);
arglist__32640 = cljs.core.next(arglist__32640);
var name = cljs.core.first(arglist__32640);
var value = cljs.core.rest(arglist__32640);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32645_32649 = cljs.core.seq(domina.nodes(content));var chunk__32646_32650 = null;var count__32647_32651 = 0;var i__32648_32652 = 0;while(true){
if((i__32648_32652 < count__32647_32651))
{var n_32653 = chunk__32646_32650.cljs$core$IIndexed$_nth$arity$2(null,i__32648_32652);n_32653.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__32654 = seq__32645_32649;
var G__32655 = chunk__32646_32650;
var G__32656 = count__32647_32651;
var G__32657 = (i__32648_32652 + 1);
seq__32645_32649 = G__32654;
chunk__32646_32650 = G__32655;
count__32647_32651 = G__32656;
i__32648_32652 = G__32657;
continue;
}
} else
{var temp__4092__auto___32658 = cljs.core.seq(seq__32645_32649);if(temp__4092__auto___32658)
{var seq__32645_32659__$1 = temp__4092__auto___32658;if(cljs.core.chunked_seq_QMARK_(seq__32645_32659__$1))
{var c__4015__auto___32660 = cljs.core.chunk_first(seq__32645_32659__$1);{
var G__32661 = cljs.core.chunk_rest(seq__32645_32659__$1);
var G__32662 = c__4015__auto___32660;
var G__32663 = cljs.core.count(c__4015__auto___32660);
var G__32664 = 0;
seq__32645_32649 = G__32661;
chunk__32646_32650 = G__32662;
count__32647_32651 = G__32663;
i__32648_32652 = G__32664;
continue;
}
} else
{var n_32665 = cljs.core.first(seq__32645_32659__$1);n_32665.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__32666 = cljs.core.next(seq__32645_32659__$1);
var G__32667 = null;
var G__32668 = 0;
var G__32669 = 0;
seq__32645_32649 = G__32666;
chunk__32646_32650 = G__32667;
count__32647_32651 = G__32668;
i__32648_32652 = G__32669;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32670){
var content = cljs.core.first(arglist__32670);
arglist__32670 = cljs.core.next(arglist__32670);
var name = cljs.core.first(arglist__32670);
var value = cljs.core.rest(arglist__32670);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32675_32679 = cljs.core.seq(domina.nodes(content));var chunk__32676_32680 = null;var count__32677_32681 = 0;var i__32678_32682 = 0;while(true){
if((i__32678_32682 < count__32677_32681))
{var n_32683 = chunk__32676_32680.cljs$core$IIndexed$_nth$arity$2(null,i__32678_32682);n_32683.removeAttribute(cljs.core.name(name));
{
var G__32684 = seq__32675_32679;
var G__32685 = chunk__32676_32680;
var G__32686 = count__32677_32681;
var G__32687 = (i__32678_32682 + 1);
seq__32675_32679 = G__32684;
chunk__32676_32680 = G__32685;
count__32677_32681 = G__32686;
i__32678_32682 = G__32687;
continue;
}
} else
{var temp__4092__auto___32688 = cljs.core.seq(seq__32675_32679);if(temp__4092__auto___32688)
{var seq__32675_32689__$1 = temp__4092__auto___32688;if(cljs.core.chunked_seq_QMARK_(seq__32675_32689__$1))
{var c__4015__auto___32690 = cljs.core.chunk_first(seq__32675_32689__$1);{
var G__32691 = cljs.core.chunk_rest(seq__32675_32689__$1);
var G__32692 = c__4015__auto___32690;
var G__32693 = cljs.core.count(c__4015__auto___32690);
var G__32694 = 0;
seq__32675_32679 = G__32691;
chunk__32676_32680 = G__32692;
count__32677_32681 = G__32693;
i__32678_32682 = G__32694;
continue;
}
} else
{var n_32695 = cljs.core.first(seq__32675_32689__$1);n_32695.removeAttribute(cljs.core.name(name));
{
var G__32696 = cljs.core.next(seq__32675_32689__$1);
var G__32697 = null;
var G__32698 = 0;
var G__32699 = 0;
seq__32675_32679 = G__32696;
chunk__32676_32680 = G__32697;
count__32677_32681 = G__32698;
i__32678_32682 = G__32699;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__32701 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32701,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32701,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
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
{if(cljs.core.constant$keyword$62)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32702_SHARP_){var attr = attrs__$1.item(p1__32702_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32709_32715 = cljs.core.seq(styles);var chunk__32710_32716 = null;var count__32711_32717 = 0;var i__32712_32718 = 0;while(true){
if((i__32712_32718 < count__32711_32717))
{var vec__32713_32719 = chunk__32710_32716.cljs$core$IIndexed$_nth$arity$2(null,i__32712_32718);var name_32720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713_32719,0,null);var value_32721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713_32719,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_32720,cljs.core.array_seq([value_32721], 0));
{
var G__32722 = seq__32709_32715;
var G__32723 = chunk__32710_32716;
var G__32724 = count__32711_32717;
var G__32725 = (i__32712_32718 + 1);
seq__32709_32715 = G__32722;
chunk__32710_32716 = G__32723;
count__32711_32717 = G__32724;
i__32712_32718 = G__32725;
continue;
}
} else
{var temp__4092__auto___32726 = cljs.core.seq(seq__32709_32715);if(temp__4092__auto___32726)
{var seq__32709_32727__$1 = temp__4092__auto___32726;if(cljs.core.chunked_seq_QMARK_(seq__32709_32727__$1))
{var c__4015__auto___32728 = cljs.core.chunk_first(seq__32709_32727__$1);{
var G__32729 = cljs.core.chunk_rest(seq__32709_32727__$1);
var G__32730 = c__4015__auto___32728;
var G__32731 = cljs.core.count(c__4015__auto___32728);
var G__32732 = 0;
seq__32709_32715 = G__32729;
chunk__32710_32716 = G__32730;
count__32711_32717 = G__32731;
i__32712_32718 = G__32732;
continue;
}
} else
{var vec__32714_32733 = cljs.core.first(seq__32709_32727__$1);var name_32734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714_32733,0,null);var value_32735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714_32733,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_32734,cljs.core.array_seq([value_32735], 0));
{
var G__32736 = cljs.core.next(seq__32709_32727__$1);
var G__32737 = null;
var G__32738 = 0;
var G__32739 = 0;
seq__32709_32715 = G__32736;
chunk__32710_32716 = G__32737;
count__32711_32717 = G__32738;
i__32712_32718 = G__32739;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32746_32752 = cljs.core.seq(attrs);var chunk__32747_32753 = null;var count__32748_32754 = 0;var i__32749_32755 = 0;while(true){
if((i__32749_32755 < count__32748_32754))
{var vec__32750_32756 = chunk__32747_32753.cljs$core$IIndexed$_nth$arity$2(null,i__32749_32755);var name_32757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750_32756,0,null);var value_32758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750_32756,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_32757,cljs.core.array_seq([value_32758], 0));
{
var G__32759 = seq__32746_32752;
var G__32760 = chunk__32747_32753;
var G__32761 = count__32748_32754;
var G__32762 = (i__32749_32755 + 1);
seq__32746_32752 = G__32759;
chunk__32747_32753 = G__32760;
count__32748_32754 = G__32761;
i__32749_32755 = G__32762;
continue;
}
} else
{var temp__4092__auto___32763 = cljs.core.seq(seq__32746_32752);if(temp__4092__auto___32763)
{var seq__32746_32764__$1 = temp__4092__auto___32763;if(cljs.core.chunked_seq_QMARK_(seq__32746_32764__$1))
{var c__4015__auto___32765 = cljs.core.chunk_first(seq__32746_32764__$1);{
var G__32766 = cljs.core.chunk_rest(seq__32746_32764__$1);
var G__32767 = c__4015__auto___32765;
var G__32768 = cljs.core.count(c__4015__auto___32765);
var G__32769 = 0;
seq__32746_32752 = G__32766;
chunk__32747_32753 = G__32767;
count__32748_32754 = G__32768;
i__32749_32755 = G__32769;
continue;
}
} else
{var vec__32751_32770 = cljs.core.first(seq__32746_32764__$1);var name_32771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751_32770,0,null);var value_32772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751_32770,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_32771,cljs.core.array_seq([value_32772], 0));
{
var G__32773 = cljs.core.next(seq__32746_32764__$1);
var G__32774 = null;
var G__32775 = 0;
var G__32776 = 0;
seq__32746_32752 = G__32773;
chunk__32747_32753 = G__32774;
count__32748_32754 = G__32775;
i__32749_32755 = G__32776;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32781_32785 = cljs.core.seq(domina.nodes(content));var chunk__32782_32786 = null;var count__32783_32787 = 0;var i__32784_32788 = 0;while(true){
if((i__32784_32788 < count__32783_32787))
{var node_32789 = chunk__32782_32786.cljs$core$IIndexed$_nth$arity$2(null,i__32784_32788);goog.dom.classes.add(node_32789,class$);
{
var G__32790 = seq__32781_32785;
var G__32791 = chunk__32782_32786;
var G__32792 = count__32783_32787;
var G__32793 = (i__32784_32788 + 1);
seq__32781_32785 = G__32790;
chunk__32782_32786 = G__32791;
count__32783_32787 = G__32792;
i__32784_32788 = G__32793;
continue;
}
} else
{var temp__4092__auto___32794 = cljs.core.seq(seq__32781_32785);if(temp__4092__auto___32794)
{var seq__32781_32795__$1 = temp__4092__auto___32794;if(cljs.core.chunked_seq_QMARK_(seq__32781_32795__$1))
{var c__4015__auto___32796 = cljs.core.chunk_first(seq__32781_32795__$1);{
var G__32797 = cljs.core.chunk_rest(seq__32781_32795__$1);
var G__32798 = c__4015__auto___32796;
var G__32799 = cljs.core.count(c__4015__auto___32796);
var G__32800 = 0;
seq__32781_32785 = G__32797;
chunk__32782_32786 = G__32798;
count__32783_32787 = G__32799;
i__32784_32788 = G__32800;
continue;
}
} else
{var node_32801 = cljs.core.first(seq__32781_32795__$1);goog.dom.classes.add(node_32801,class$);
{
var G__32802 = cljs.core.next(seq__32781_32795__$1);
var G__32803 = null;
var G__32804 = 0;
var G__32805 = 0;
seq__32781_32785 = G__32802;
chunk__32782_32786 = G__32803;
count__32783_32787 = G__32804;
i__32784_32788 = G__32805;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32810_32814 = cljs.core.seq(domina.nodes(content));var chunk__32811_32815 = null;var count__32812_32816 = 0;var i__32813_32817 = 0;while(true){
if((i__32813_32817 < count__32812_32816))
{var node_32818 = chunk__32811_32815.cljs$core$IIndexed$_nth$arity$2(null,i__32813_32817);goog.dom.classes.remove(node_32818,class$);
{
var G__32819 = seq__32810_32814;
var G__32820 = chunk__32811_32815;
var G__32821 = count__32812_32816;
var G__32822 = (i__32813_32817 + 1);
seq__32810_32814 = G__32819;
chunk__32811_32815 = G__32820;
count__32812_32816 = G__32821;
i__32813_32817 = G__32822;
continue;
}
} else
{var temp__4092__auto___32823 = cljs.core.seq(seq__32810_32814);if(temp__4092__auto___32823)
{var seq__32810_32824__$1 = temp__4092__auto___32823;if(cljs.core.chunked_seq_QMARK_(seq__32810_32824__$1))
{var c__4015__auto___32825 = cljs.core.chunk_first(seq__32810_32824__$1);{
var G__32826 = cljs.core.chunk_rest(seq__32810_32824__$1);
var G__32827 = c__4015__auto___32825;
var G__32828 = cljs.core.count(c__4015__auto___32825);
var G__32829 = 0;
seq__32810_32814 = G__32826;
chunk__32811_32815 = G__32827;
count__32812_32816 = G__32828;
i__32813_32817 = G__32829;
continue;
}
} else
{var node_32830 = cljs.core.first(seq__32810_32824__$1);goog.dom.classes.remove(node_32830,class$);
{
var G__32831 = cljs.core.next(seq__32810_32824__$1);
var G__32832 = null;
var G__32833 = 0;
var G__32834 = 0;
seq__32810_32814 = G__32831;
chunk__32811_32815 = G__32832;
count__32812_32816 = G__32833;
i__32813_32817 = G__32834;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32839_32843 = cljs.core.seq(domina.nodes(content));var chunk__32840_32844 = null;var count__32841_32845 = 0;var i__32842_32846 = 0;while(true){
if((i__32842_32846 < count__32841_32845))
{var node_32847 = chunk__32840_32844.cljs$core$IIndexed$_nth$arity$2(null,i__32842_32846);goog.dom.classes.toggle(node_32847,class$);
{
var G__32848 = seq__32839_32843;
var G__32849 = chunk__32840_32844;
var G__32850 = count__32841_32845;
var G__32851 = (i__32842_32846 + 1);
seq__32839_32843 = G__32848;
chunk__32840_32844 = G__32849;
count__32841_32845 = G__32850;
i__32842_32846 = G__32851;
continue;
}
} else
{var temp__4092__auto___32852 = cljs.core.seq(seq__32839_32843);if(temp__4092__auto___32852)
{var seq__32839_32853__$1 = temp__4092__auto___32852;if(cljs.core.chunked_seq_QMARK_(seq__32839_32853__$1))
{var c__4015__auto___32854 = cljs.core.chunk_first(seq__32839_32853__$1);{
var G__32855 = cljs.core.chunk_rest(seq__32839_32853__$1);
var G__32856 = c__4015__auto___32854;
var G__32857 = cljs.core.count(c__4015__auto___32854);
var G__32858 = 0;
seq__32839_32843 = G__32855;
chunk__32840_32844 = G__32856;
count__32841_32845 = G__32857;
i__32842_32846 = G__32858;
continue;
}
} else
{var node_32859 = cljs.core.first(seq__32839_32853__$1);goog.dom.classes.toggle(node_32859,class$);
{
var G__32860 = cljs.core.next(seq__32839_32853__$1);
var G__32861 = null;
var G__32862 = 0;
var G__32863 = 0;
seq__32839_32843 = G__32860;
chunk__32840_32844 = G__32861;
count__32841_32845 = G__32862;
i__32842_32846 = G__32863;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32872__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__32868_32873 = cljs.core.seq(domina.nodes(content));var chunk__32869_32874 = null;var count__32870_32875 = 0;var i__32871_32876 = 0;while(true){
if((i__32871_32876 < count__32870_32875))
{var node_32877 = chunk__32869_32874.cljs$core$IIndexed$_nth$arity$2(null,i__32871_32876);goog.dom.classes.set(node_32877,classes_32872__$1);
{
var G__32878 = seq__32868_32873;
var G__32879 = chunk__32869_32874;
var G__32880 = count__32870_32875;
var G__32881 = (i__32871_32876 + 1);
seq__32868_32873 = G__32878;
chunk__32869_32874 = G__32879;
count__32870_32875 = G__32880;
i__32871_32876 = G__32881;
continue;
}
} else
{var temp__4092__auto___32882 = cljs.core.seq(seq__32868_32873);if(temp__4092__auto___32882)
{var seq__32868_32883__$1 = temp__4092__auto___32882;if(cljs.core.chunked_seq_QMARK_(seq__32868_32883__$1))
{var c__4015__auto___32884 = cljs.core.chunk_first(seq__32868_32883__$1);{
var G__32885 = cljs.core.chunk_rest(seq__32868_32883__$1);
var G__32886 = c__4015__auto___32884;
var G__32887 = cljs.core.count(c__4015__auto___32884);
var G__32888 = 0;
seq__32868_32873 = G__32885;
chunk__32869_32874 = G__32886;
count__32870_32875 = G__32887;
i__32871_32876 = G__32888;
continue;
}
} else
{var node_32889 = cljs.core.first(seq__32868_32883__$1);goog.dom.classes.set(node_32889,classes_32872__$1);
{
var G__32890 = cljs.core.next(seq__32868_32883__$1);
var G__32891 = null;
var G__32892 = 0;
var G__32893 = 0;
seq__32868_32873 = G__32890;
chunk__32869_32874 = G__32891;
count__32870_32875 = G__32892;
i__32871_32876 = G__32893;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32898_32902 = cljs.core.seq(domina.nodes(content));var chunk__32899_32903 = null;var count__32900_32904 = 0;var i__32901_32905 = 0;while(true){
if((i__32901_32905 < count__32900_32904))
{var node_32906 = chunk__32899_32903.cljs$core$IIndexed$_nth$arity$2(null,i__32901_32905);goog.dom.setTextContent(node_32906,value);
{
var G__32907 = seq__32898_32902;
var G__32908 = chunk__32899_32903;
var G__32909 = count__32900_32904;
var G__32910 = (i__32901_32905 + 1);
seq__32898_32902 = G__32907;
chunk__32899_32903 = G__32908;
count__32900_32904 = G__32909;
i__32901_32905 = G__32910;
continue;
}
} else
{var temp__4092__auto___32911 = cljs.core.seq(seq__32898_32902);if(temp__4092__auto___32911)
{var seq__32898_32912__$1 = temp__4092__auto___32911;if(cljs.core.chunked_seq_QMARK_(seq__32898_32912__$1))
{var c__4015__auto___32913 = cljs.core.chunk_first(seq__32898_32912__$1);{
var G__32914 = cljs.core.chunk_rest(seq__32898_32912__$1);
var G__32915 = c__4015__auto___32913;
var G__32916 = cljs.core.count(c__4015__auto___32913);
var G__32917 = 0;
seq__32898_32902 = G__32914;
chunk__32899_32903 = G__32915;
count__32900_32904 = G__32916;
i__32901_32905 = G__32917;
continue;
}
} else
{var node_32918 = cljs.core.first(seq__32898_32912__$1);goog.dom.setTextContent(node_32918,value);
{
var G__32919 = cljs.core.next(seq__32898_32912__$1);
var G__32920 = null;
var G__32921 = 0;
var G__32922 = 0;
seq__32898_32902 = G__32919;
chunk__32899_32903 = G__32920;
count__32900_32904 = G__32921;
i__32901_32905 = G__32922;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32927_32931 = cljs.core.seq(domina.nodes(content));var chunk__32928_32932 = null;var count__32929_32933 = 0;var i__32930_32934 = 0;while(true){
if((i__32930_32934 < count__32929_32933))
{var node_32935 = chunk__32928_32932.cljs$core$IIndexed$_nth$arity$2(null,i__32930_32934);goog.dom.forms.setValue(node_32935,value);
{
var G__32936 = seq__32927_32931;
var G__32937 = chunk__32928_32932;
var G__32938 = count__32929_32933;
var G__32939 = (i__32930_32934 + 1);
seq__32927_32931 = G__32936;
chunk__32928_32932 = G__32937;
count__32929_32933 = G__32938;
i__32930_32934 = G__32939;
continue;
}
} else
{var temp__4092__auto___32940 = cljs.core.seq(seq__32927_32931);if(temp__4092__auto___32940)
{var seq__32927_32941__$1 = temp__4092__auto___32940;if(cljs.core.chunked_seq_QMARK_(seq__32927_32941__$1))
{var c__4015__auto___32942 = cljs.core.chunk_first(seq__32927_32941__$1);{
var G__32943 = cljs.core.chunk_rest(seq__32927_32941__$1);
var G__32944 = c__4015__auto___32942;
var G__32945 = cljs.core.count(c__4015__auto___32942);
var G__32946 = 0;
seq__32927_32931 = G__32943;
chunk__32928_32932 = G__32944;
count__32929_32933 = G__32945;
i__32930_32934 = G__32946;
continue;
}
} else
{var node_32947 = cljs.core.first(seq__32927_32941__$1);goog.dom.forms.setValue(node_32947,value);
{
var G__32948 = cljs.core.next(seq__32927_32941__$1);
var G__32949 = null;
var G__32950 = 0;
var G__32951 = 0;
seq__32927_32931 = G__32948;
chunk__32928_32932 = G__32949;
count__32929_32933 = G__32950;
i__32930_32934 = G__32951;
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
{var value_32962 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32958_32963 = cljs.core.seq(domina.nodes(content));var chunk__32959_32964 = null;var count__32960_32965 = 0;var i__32961_32966 = 0;while(true){
if((i__32961_32966 < count__32960_32965))
{var node_32967 = chunk__32959_32964.cljs$core$IIndexed$_nth$arity$2(null,i__32961_32966);node_32967.innerHTML = value_32962;
{
var G__32968 = seq__32958_32963;
var G__32969 = chunk__32959_32964;
var G__32970 = count__32960_32965;
var G__32971 = (i__32961_32966 + 1);
seq__32958_32963 = G__32968;
chunk__32959_32964 = G__32969;
count__32960_32965 = G__32970;
i__32961_32966 = G__32971;
continue;
}
} else
{var temp__4092__auto___32972 = cljs.core.seq(seq__32958_32963);if(temp__4092__auto___32972)
{var seq__32958_32973__$1 = temp__4092__auto___32972;if(cljs.core.chunked_seq_QMARK_(seq__32958_32973__$1))
{var c__4015__auto___32974 = cljs.core.chunk_first(seq__32958_32973__$1);{
var G__32975 = cljs.core.chunk_rest(seq__32958_32973__$1);
var G__32976 = c__4015__auto___32974;
var G__32977 = cljs.core.count(c__4015__auto___32974);
var G__32978 = 0;
seq__32958_32963 = G__32975;
chunk__32959_32964 = G__32976;
count__32960_32965 = G__32977;
i__32961_32966 = G__32978;
continue;
}
} else
{var node_32979 = cljs.core.first(seq__32958_32973__$1);node_32979.innerHTML = value_32962;
{
var G__32980 = cljs.core.next(seq__32958_32973__$1);
var G__32981 = null;
var G__32982 = 0;
var G__32983 = 0;
seq__32958_32963 = G__32980;
chunk__32959_32964 = G__32981;
count__32960_32965 = G__32982;
i__32961_32966 = G__32983;
continue;
}
}
} else
{}
}
break;
}
}catch (e32957){if((e32957 instanceof Error))
{var e_32984 = e32957;domina.replace_children_BANG_(content,value_32962);
} else
{if(cljs.core.constant$keyword$62)
{throw e32957;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__32991_32995 = cljs.core.seq(children);var chunk__32992_32996 = null;var count__32993_32997 = 0;var i__32994_32998 = 0;while(true){
if((i__32994_32998 < count__32993_32997))
{var child_32999 = chunk__32992_32996.cljs$core$IIndexed$_nth$arity$2(null,i__32994_32998);frag.appendChild(child_32999);
{
var G__33000 = seq__32991_32995;
var G__33001 = chunk__32992_32996;
var G__33002 = count__32993_32997;
var G__33003 = (i__32994_32998 + 1);
seq__32991_32995 = G__33000;
chunk__32992_32996 = G__33001;
count__32993_32997 = G__33002;
i__32994_32998 = G__33003;
continue;
}
} else
{var temp__4092__auto___33004 = cljs.core.seq(seq__32991_32995);if(temp__4092__auto___33004)
{var seq__32991_33005__$1 = temp__4092__auto___33004;if(cljs.core.chunked_seq_QMARK_(seq__32991_33005__$1))
{var c__4015__auto___33006 = cljs.core.chunk_first(seq__32991_33005__$1);{
var G__33007 = cljs.core.chunk_rest(seq__32991_33005__$1);
var G__33008 = c__4015__auto___33006;
var G__33009 = cljs.core.count(c__4015__auto___33006);
var G__33010 = 0;
seq__32991_32995 = G__33007;
chunk__32992_32996 = G__33008;
count__32993_32997 = G__33009;
i__32994_32998 = G__33010;
continue;
}
} else
{var child_33011 = cljs.core.first(seq__32991_33005__$1);frag.appendChild(child_33011);
{
var G__33012 = cljs.core.next(seq__32991_33005__$1);
var G__33013 = null;
var G__33014 = 0;
var G__33015 = 0;
seq__32991_32995 = G__33012;
chunk__32992_32996 = G__33013;
count__32993_32997 = G__33014;
i__32994_32998 = G__33015;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__32985_SHARP_,p2__32986_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__32985_SHARP_,p2__32986_SHARP_) : f.call(null,p1__32985_SHARP_,p2__32986_SHARP_));
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
{if((function (){var G__33017 = list_thing;if(G__33017)
{var bit__3917__auto__ = (G__33017.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33017.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33017.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33017);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$63)
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
{if((function (){var G__33018 = content;if(G__33018)
{var bit__3917__auto__ = (G__33018.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33018.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33018);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$63)
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
{if((function (){var G__33019 = content;if(G__33019)
{var bit__3917__auto__ = (G__33019.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33019.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33019.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33019);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__33019);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$63)
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
