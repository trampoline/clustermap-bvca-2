// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_17529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17530 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17530,table_section_wrapper_17530,opt_wrapper_17529,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17531,table_section_wrapper_17530,cell_wrapper_17531,opt_wrapper_17529,table_section_wrapper_17530,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17530]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17536 = cljs.core.seq.call(null,tbody);var chunk__17537 = null;var count__17538 = 0;var i__17539 = 0;while(true){
if((i__17539 < count__17538))
{var child = cljs.core._nth.call(null,chunk__17537,i__17539);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17540 = seq__17536;
var G__17541 = chunk__17537;
var G__17542 = count__17538;
var G__17543 = (i__17539 + 1);
seq__17536 = G__17540;
chunk__17537 = G__17541;
count__17538 = G__17542;
i__17539 = G__17543;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17536);if(temp__4092__auto__)
{var seq__17536__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17536__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17536__$1);{
var G__17544 = cljs.core.chunk_rest.call(null,seq__17536__$1);
var G__17545 = c__4189__auto__;
var G__17546 = cljs.core.count.call(null,c__4189__auto__);
var G__17547 = 0;
seq__17536 = G__17544;
chunk__17537 = G__17545;
count__17538 = G__17546;
i__17539 = G__17547;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17536__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17548 = cljs.core.next.call(null,seq__17536__$1);
var G__17549 = null;
var G__17550 = 0;
var G__17551 = 0;
seq__17536 = G__17548;
chunk__17537 = G__17549;
count__17538 = G__17550;
i__17539 = G__17551;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17553 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17553,0,null);var start_wrap = cljs.core.nth.call(null,vec__17553,1,null);var end_wrap = cljs.core.nth.call(null,vec__17553,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17554 = wrapper.lastChild;
var G__17555 = (level - 1);
wrapper = G__17554;
level = G__17555;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17557 = {};return obj17557;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17558){
var mesg = cljs.core.seq(arglist__17558);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17559){
var mesg = cljs.core.seq(arglist__17559);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17560){
var contents = cljs.core.seq(arglist__17560);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17561_SHARP_){return p1__17561_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17562_SHARP_,p2__17563_SHARP_){return goog.dom.insertChildAt(p1__17562_SHARP_,p2__17563_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17565_SHARP_,p2__17564_SHARP_){return goog.dom.insertSiblingBefore(p2__17564_SHARP_,p1__17565_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17567_SHARP_,p2__17566_SHARP_){return goog.dom.insertSiblingAfter(p2__17566_SHARP_,p1__17567_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17569_SHARP_,p2__17568_SHARP_){return goog.dom.replaceNode(p2__17568_SHARP_,p1__17569_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17574_17578 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17575_17579 = null;var count__17576_17580 = 0;var i__17577_17581 = 0;while(true){
if((i__17577_17581 < count__17576_17580))
{var n_17582 = cljs.core._nth.call(null,chunk__17575_17579,i__17577_17581);goog.style.setStyle(n_17582,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17583 = seq__17574_17578;
var G__17584 = chunk__17575_17579;
var G__17585 = count__17576_17580;
var G__17586 = (i__17577_17581 + 1);
seq__17574_17578 = G__17583;
chunk__17575_17579 = G__17584;
count__17576_17580 = G__17585;
i__17577_17581 = G__17586;
continue;
}
} else
{var temp__4092__auto___17587 = cljs.core.seq.call(null,seq__17574_17578);if(temp__4092__auto___17587)
{var seq__17574_17588__$1 = temp__4092__auto___17587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17574_17588__$1))
{var c__4189__auto___17589 = cljs.core.chunk_first.call(null,seq__17574_17588__$1);{
var G__17590 = cljs.core.chunk_rest.call(null,seq__17574_17588__$1);
var G__17591 = c__4189__auto___17589;
var G__17592 = cljs.core.count.call(null,c__4189__auto___17589);
var G__17593 = 0;
seq__17574_17578 = G__17590;
chunk__17575_17579 = G__17591;
count__17576_17580 = G__17592;
i__17577_17581 = G__17593;
continue;
}
} else
{var n_17594 = cljs.core.first.call(null,seq__17574_17588__$1);goog.style.setStyle(n_17594,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17595 = cljs.core.next.call(null,seq__17574_17588__$1);
var G__17596 = null;
var G__17597 = 0;
var G__17598 = 0;
seq__17574_17578 = G__17595;
chunk__17575_17579 = G__17596;
count__17576_17580 = G__17597;
i__17577_17581 = G__17598;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17599){
var content = cljs.core.first(arglist__17599);
arglist__17599 = cljs.core.next(arglist__17599);
var name = cljs.core.first(arglist__17599);
var value = cljs.core.rest(arglist__17599);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17604_17608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17605_17609 = null;var count__17606_17610 = 0;var i__17607_17611 = 0;while(true){
if((i__17607_17611 < count__17606_17610))
{var n_17612 = cljs.core._nth.call(null,chunk__17605_17609,i__17607_17611);n_17612.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17613 = seq__17604_17608;
var G__17614 = chunk__17605_17609;
var G__17615 = count__17606_17610;
var G__17616 = (i__17607_17611 + 1);
seq__17604_17608 = G__17613;
chunk__17605_17609 = G__17614;
count__17606_17610 = G__17615;
i__17607_17611 = G__17616;
continue;
}
} else
{var temp__4092__auto___17617 = cljs.core.seq.call(null,seq__17604_17608);if(temp__4092__auto___17617)
{var seq__17604_17618__$1 = temp__4092__auto___17617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17604_17618__$1))
{var c__4189__auto___17619 = cljs.core.chunk_first.call(null,seq__17604_17618__$1);{
var G__17620 = cljs.core.chunk_rest.call(null,seq__17604_17618__$1);
var G__17621 = c__4189__auto___17619;
var G__17622 = cljs.core.count.call(null,c__4189__auto___17619);
var G__17623 = 0;
seq__17604_17608 = G__17620;
chunk__17605_17609 = G__17621;
count__17606_17610 = G__17622;
i__17607_17611 = G__17623;
continue;
}
} else
{var n_17624 = cljs.core.first.call(null,seq__17604_17618__$1);n_17624.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17625 = cljs.core.next.call(null,seq__17604_17618__$1);
var G__17626 = null;
var G__17627 = 0;
var G__17628 = 0;
seq__17604_17608 = G__17625;
chunk__17605_17609 = G__17626;
count__17606_17610 = G__17627;
i__17607_17611 = G__17628;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17629){
var content = cljs.core.first(arglist__17629);
arglist__17629 = cljs.core.next(arglist__17629);
var name = cljs.core.first(arglist__17629);
var value = cljs.core.rest(arglist__17629);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17634_17638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17635_17639 = null;var count__17636_17640 = 0;var i__17637_17641 = 0;while(true){
if((i__17637_17641 < count__17636_17640))
{var n_17642 = cljs.core._nth.call(null,chunk__17635_17639,i__17637_17641);n_17642.removeAttribute(cljs.core.name.call(null,name));
{
var G__17643 = seq__17634_17638;
var G__17644 = chunk__17635_17639;
var G__17645 = count__17636_17640;
var G__17646 = (i__17637_17641 + 1);
seq__17634_17638 = G__17643;
chunk__17635_17639 = G__17644;
count__17636_17640 = G__17645;
i__17637_17641 = G__17646;
continue;
}
} else
{var temp__4092__auto___17647 = cljs.core.seq.call(null,seq__17634_17638);if(temp__4092__auto___17647)
{var seq__17634_17648__$1 = temp__4092__auto___17647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17634_17648__$1))
{var c__4189__auto___17649 = cljs.core.chunk_first.call(null,seq__17634_17648__$1);{
var G__17650 = cljs.core.chunk_rest.call(null,seq__17634_17648__$1);
var G__17651 = c__4189__auto___17649;
var G__17652 = cljs.core.count.call(null,c__4189__auto___17649);
var G__17653 = 0;
seq__17634_17638 = G__17650;
chunk__17635_17639 = G__17651;
count__17636_17640 = G__17652;
i__17637_17641 = G__17653;
continue;
}
} else
{var n_17654 = cljs.core.first.call(null,seq__17634_17648__$1);n_17654.removeAttribute(cljs.core.name.call(null,name));
{
var G__17655 = cljs.core.next.call(null,seq__17634_17648__$1);
var G__17656 = null;
var G__17657 = 0;
var G__17658 = 0;
seq__17634_17638 = G__17655;
chunk__17635_17639 = G__17656;
count__17636_17640 = G__17657;
i__17637_17641 = G__17658;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17660 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17660,0,null);var v = cljs.core.nth.call(null,vec__17660,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17661_SHARP_){var attr = attrs__$1.item(p1__17661_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17668_17674 = cljs.core.seq.call(null,styles);var chunk__17669_17675 = null;var count__17670_17676 = 0;var i__17671_17677 = 0;while(true){
if((i__17671_17677 < count__17670_17676))
{var vec__17672_17678 = cljs.core._nth.call(null,chunk__17669_17675,i__17671_17677);var name_17679 = cljs.core.nth.call(null,vec__17672_17678,0,null);var value_17680 = cljs.core.nth.call(null,vec__17672_17678,1,null);domina.set_style_BANG_.call(null,content,name_17679,value_17680);
{
var G__17681 = seq__17668_17674;
var G__17682 = chunk__17669_17675;
var G__17683 = count__17670_17676;
var G__17684 = (i__17671_17677 + 1);
seq__17668_17674 = G__17681;
chunk__17669_17675 = G__17682;
count__17670_17676 = G__17683;
i__17671_17677 = G__17684;
continue;
}
} else
{var temp__4092__auto___17685 = cljs.core.seq.call(null,seq__17668_17674);if(temp__4092__auto___17685)
{var seq__17668_17686__$1 = temp__4092__auto___17685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17668_17686__$1))
{var c__4189__auto___17687 = cljs.core.chunk_first.call(null,seq__17668_17686__$1);{
var G__17688 = cljs.core.chunk_rest.call(null,seq__17668_17686__$1);
var G__17689 = c__4189__auto___17687;
var G__17690 = cljs.core.count.call(null,c__4189__auto___17687);
var G__17691 = 0;
seq__17668_17674 = G__17688;
chunk__17669_17675 = G__17689;
count__17670_17676 = G__17690;
i__17671_17677 = G__17691;
continue;
}
} else
{var vec__17673_17692 = cljs.core.first.call(null,seq__17668_17686__$1);var name_17693 = cljs.core.nth.call(null,vec__17673_17692,0,null);var value_17694 = cljs.core.nth.call(null,vec__17673_17692,1,null);domina.set_style_BANG_.call(null,content,name_17693,value_17694);
{
var G__17695 = cljs.core.next.call(null,seq__17668_17686__$1);
var G__17696 = null;
var G__17697 = 0;
var G__17698 = 0;
seq__17668_17674 = G__17695;
chunk__17669_17675 = G__17696;
count__17670_17676 = G__17697;
i__17671_17677 = G__17698;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17705_17711 = cljs.core.seq.call(null,attrs);var chunk__17706_17712 = null;var count__17707_17713 = 0;var i__17708_17714 = 0;while(true){
if((i__17708_17714 < count__17707_17713))
{var vec__17709_17715 = cljs.core._nth.call(null,chunk__17706_17712,i__17708_17714);var name_17716 = cljs.core.nth.call(null,vec__17709_17715,0,null);var value_17717 = cljs.core.nth.call(null,vec__17709_17715,1,null);domina.set_attr_BANG_.call(null,content,name_17716,value_17717);
{
var G__17718 = seq__17705_17711;
var G__17719 = chunk__17706_17712;
var G__17720 = count__17707_17713;
var G__17721 = (i__17708_17714 + 1);
seq__17705_17711 = G__17718;
chunk__17706_17712 = G__17719;
count__17707_17713 = G__17720;
i__17708_17714 = G__17721;
continue;
}
} else
{var temp__4092__auto___17722 = cljs.core.seq.call(null,seq__17705_17711);if(temp__4092__auto___17722)
{var seq__17705_17723__$1 = temp__4092__auto___17722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17705_17723__$1))
{var c__4189__auto___17724 = cljs.core.chunk_first.call(null,seq__17705_17723__$1);{
var G__17725 = cljs.core.chunk_rest.call(null,seq__17705_17723__$1);
var G__17726 = c__4189__auto___17724;
var G__17727 = cljs.core.count.call(null,c__4189__auto___17724);
var G__17728 = 0;
seq__17705_17711 = G__17725;
chunk__17706_17712 = G__17726;
count__17707_17713 = G__17727;
i__17708_17714 = G__17728;
continue;
}
} else
{var vec__17710_17729 = cljs.core.first.call(null,seq__17705_17723__$1);var name_17730 = cljs.core.nth.call(null,vec__17710_17729,0,null);var value_17731 = cljs.core.nth.call(null,vec__17710_17729,1,null);domina.set_attr_BANG_.call(null,content,name_17730,value_17731);
{
var G__17732 = cljs.core.next.call(null,seq__17705_17723__$1);
var G__17733 = null;
var G__17734 = 0;
var G__17735 = 0;
seq__17705_17711 = G__17732;
chunk__17706_17712 = G__17733;
count__17707_17713 = G__17734;
i__17708_17714 = G__17735;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17740_17744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17741_17745 = null;var count__17742_17746 = 0;var i__17743_17747 = 0;while(true){
if((i__17743_17747 < count__17742_17746))
{var node_17748 = cljs.core._nth.call(null,chunk__17741_17745,i__17743_17747);goog.dom.classes.add(node_17748,class$);
{
var G__17749 = seq__17740_17744;
var G__17750 = chunk__17741_17745;
var G__17751 = count__17742_17746;
var G__17752 = (i__17743_17747 + 1);
seq__17740_17744 = G__17749;
chunk__17741_17745 = G__17750;
count__17742_17746 = G__17751;
i__17743_17747 = G__17752;
continue;
}
} else
{var temp__4092__auto___17753 = cljs.core.seq.call(null,seq__17740_17744);if(temp__4092__auto___17753)
{var seq__17740_17754__$1 = temp__4092__auto___17753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17740_17754__$1))
{var c__4189__auto___17755 = cljs.core.chunk_first.call(null,seq__17740_17754__$1);{
var G__17756 = cljs.core.chunk_rest.call(null,seq__17740_17754__$1);
var G__17757 = c__4189__auto___17755;
var G__17758 = cljs.core.count.call(null,c__4189__auto___17755);
var G__17759 = 0;
seq__17740_17744 = G__17756;
chunk__17741_17745 = G__17757;
count__17742_17746 = G__17758;
i__17743_17747 = G__17759;
continue;
}
} else
{var node_17760 = cljs.core.first.call(null,seq__17740_17754__$1);goog.dom.classes.add(node_17760,class$);
{
var G__17761 = cljs.core.next.call(null,seq__17740_17754__$1);
var G__17762 = null;
var G__17763 = 0;
var G__17764 = 0;
seq__17740_17744 = G__17761;
chunk__17741_17745 = G__17762;
count__17742_17746 = G__17763;
i__17743_17747 = G__17764;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17769_17773 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17770_17774 = null;var count__17771_17775 = 0;var i__17772_17776 = 0;while(true){
if((i__17772_17776 < count__17771_17775))
{var node_17777 = cljs.core._nth.call(null,chunk__17770_17774,i__17772_17776);goog.dom.classes.remove(node_17777,class$);
{
var G__17778 = seq__17769_17773;
var G__17779 = chunk__17770_17774;
var G__17780 = count__17771_17775;
var G__17781 = (i__17772_17776 + 1);
seq__17769_17773 = G__17778;
chunk__17770_17774 = G__17779;
count__17771_17775 = G__17780;
i__17772_17776 = G__17781;
continue;
}
} else
{var temp__4092__auto___17782 = cljs.core.seq.call(null,seq__17769_17773);if(temp__4092__auto___17782)
{var seq__17769_17783__$1 = temp__4092__auto___17782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17769_17783__$1))
{var c__4189__auto___17784 = cljs.core.chunk_first.call(null,seq__17769_17783__$1);{
var G__17785 = cljs.core.chunk_rest.call(null,seq__17769_17783__$1);
var G__17786 = c__4189__auto___17784;
var G__17787 = cljs.core.count.call(null,c__4189__auto___17784);
var G__17788 = 0;
seq__17769_17773 = G__17785;
chunk__17770_17774 = G__17786;
count__17771_17775 = G__17787;
i__17772_17776 = G__17788;
continue;
}
} else
{var node_17789 = cljs.core.first.call(null,seq__17769_17783__$1);goog.dom.classes.remove(node_17789,class$);
{
var G__17790 = cljs.core.next.call(null,seq__17769_17783__$1);
var G__17791 = null;
var G__17792 = 0;
var G__17793 = 0;
seq__17769_17773 = G__17790;
chunk__17770_17774 = G__17791;
count__17771_17775 = G__17792;
i__17772_17776 = G__17793;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17798_17802 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17799_17803 = null;var count__17800_17804 = 0;var i__17801_17805 = 0;while(true){
if((i__17801_17805 < count__17800_17804))
{var node_17806 = cljs.core._nth.call(null,chunk__17799_17803,i__17801_17805);goog.dom.classes.toggle(node_17806,class$);
{
var G__17807 = seq__17798_17802;
var G__17808 = chunk__17799_17803;
var G__17809 = count__17800_17804;
var G__17810 = (i__17801_17805 + 1);
seq__17798_17802 = G__17807;
chunk__17799_17803 = G__17808;
count__17800_17804 = G__17809;
i__17801_17805 = G__17810;
continue;
}
} else
{var temp__4092__auto___17811 = cljs.core.seq.call(null,seq__17798_17802);if(temp__4092__auto___17811)
{var seq__17798_17812__$1 = temp__4092__auto___17811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17798_17812__$1))
{var c__4189__auto___17813 = cljs.core.chunk_first.call(null,seq__17798_17812__$1);{
var G__17814 = cljs.core.chunk_rest.call(null,seq__17798_17812__$1);
var G__17815 = c__4189__auto___17813;
var G__17816 = cljs.core.count.call(null,c__4189__auto___17813);
var G__17817 = 0;
seq__17798_17802 = G__17814;
chunk__17799_17803 = G__17815;
count__17800_17804 = G__17816;
i__17801_17805 = G__17817;
continue;
}
} else
{var node_17818 = cljs.core.first.call(null,seq__17798_17812__$1);goog.dom.classes.toggle(node_17818,class$);
{
var G__17819 = cljs.core.next.call(null,seq__17798_17812__$1);
var G__17820 = null;
var G__17821 = 0;
var G__17822 = 0;
seq__17798_17802 = G__17819;
chunk__17799_17803 = G__17820;
count__17800_17804 = G__17821;
i__17801_17805 = G__17822;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17831__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17827_17832 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17828_17833 = null;var count__17829_17834 = 0;var i__17830_17835 = 0;while(true){
if((i__17830_17835 < count__17829_17834))
{var node_17836 = cljs.core._nth.call(null,chunk__17828_17833,i__17830_17835);goog.dom.classes.set(node_17836,classes_17831__$1);
{
var G__17837 = seq__17827_17832;
var G__17838 = chunk__17828_17833;
var G__17839 = count__17829_17834;
var G__17840 = (i__17830_17835 + 1);
seq__17827_17832 = G__17837;
chunk__17828_17833 = G__17838;
count__17829_17834 = G__17839;
i__17830_17835 = G__17840;
continue;
}
} else
{var temp__4092__auto___17841 = cljs.core.seq.call(null,seq__17827_17832);if(temp__4092__auto___17841)
{var seq__17827_17842__$1 = temp__4092__auto___17841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17827_17842__$1))
{var c__4189__auto___17843 = cljs.core.chunk_first.call(null,seq__17827_17842__$1);{
var G__17844 = cljs.core.chunk_rest.call(null,seq__17827_17842__$1);
var G__17845 = c__4189__auto___17843;
var G__17846 = cljs.core.count.call(null,c__4189__auto___17843);
var G__17847 = 0;
seq__17827_17832 = G__17844;
chunk__17828_17833 = G__17845;
count__17829_17834 = G__17846;
i__17830_17835 = G__17847;
continue;
}
} else
{var node_17848 = cljs.core.first.call(null,seq__17827_17842__$1);goog.dom.classes.set(node_17848,classes_17831__$1);
{
var G__17849 = cljs.core.next.call(null,seq__17827_17842__$1);
var G__17850 = null;
var G__17851 = 0;
var G__17852 = 0;
seq__17827_17832 = G__17849;
chunk__17828_17833 = G__17850;
count__17829_17834 = G__17851;
i__17830_17835 = G__17852;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17857_17861 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17858_17862 = null;var count__17859_17863 = 0;var i__17860_17864 = 0;while(true){
if((i__17860_17864 < count__17859_17863))
{var node_17865 = cljs.core._nth.call(null,chunk__17858_17862,i__17860_17864);goog.dom.setTextContent(node_17865,value);
{
var G__17866 = seq__17857_17861;
var G__17867 = chunk__17858_17862;
var G__17868 = count__17859_17863;
var G__17869 = (i__17860_17864 + 1);
seq__17857_17861 = G__17866;
chunk__17858_17862 = G__17867;
count__17859_17863 = G__17868;
i__17860_17864 = G__17869;
continue;
}
} else
{var temp__4092__auto___17870 = cljs.core.seq.call(null,seq__17857_17861);if(temp__4092__auto___17870)
{var seq__17857_17871__$1 = temp__4092__auto___17870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17857_17871__$1))
{var c__4189__auto___17872 = cljs.core.chunk_first.call(null,seq__17857_17871__$1);{
var G__17873 = cljs.core.chunk_rest.call(null,seq__17857_17871__$1);
var G__17874 = c__4189__auto___17872;
var G__17875 = cljs.core.count.call(null,c__4189__auto___17872);
var G__17876 = 0;
seq__17857_17861 = G__17873;
chunk__17858_17862 = G__17874;
count__17859_17863 = G__17875;
i__17860_17864 = G__17876;
continue;
}
} else
{var node_17877 = cljs.core.first.call(null,seq__17857_17871__$1);goog.dom.setTextContent(node_17877,value);
{
var G__17878 = cljs.core.next.call(null,seq__17857_17871__$1);
var G__17879 = null;
var G__17880 = 0;
var G__17881 = 0;
seq__17857_17861 = G__17878;
chunk__17858_17862 = G__17879;
count__17859_17863 = G__17880;
i__17860_17864 = G__17881;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17886_17890 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17887_17891 = null;var count__17888_17892 = 0;var i__17889_17893 = 0;while(true){
if((i__17889_17893 < count__17888_17892))
{var node_17894 = cljs.core._nth.call(null,chunk__17887_17891,i__17889_17893);goog.dom.forms.setValue(node_17894,value);
{
var G__17895 = seq__17886_17890;
var G__17896 = chunk__17887_17891;
var G__17897 = count__17888_17892;
var G__17898 = (i__17889_17893 + 1);
seq__17886_17890 = G__17895;
chunk__17887_17891 = G__17896;
count__17888_17892 = G__17897;
i__17889_17893 = G__17898;
continue;
}
} else
{var temp__4092__auto___17899 = cljs.core.seq.call(null,seq__17886_17890);if(temp__4092__auto___17899)
{var seq__17886_17900__$1 = temp__4092__auto___17899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17886_17900__$1))
{var c__4189__auto___17901 = cljs.core.chunk_first.call(null,seq__17886_17900__$1);{
var G__17902 = cljs.core.chunk_rest.call(null,seq__17886_17900__$1);
var G__17903 = c__4189__auto___17901;
var G__17904 = cljs.core.count.call(null,c__4189__auto___17901);
var G__17905 = 0;
seq__17886_17890 = G__17902;
chunk__17887_17891 = G__17903;
count__17888_17892 = G__17904;
i__17889_17893 = G__17905;
continue;
}
} else
{var node_17906 = cljs.core.first.call(null,seq__17886_17900__$1);goog.dom.forms.setValue(node_17906,value);
{
var G__17907 = cljs.core.next.call(null,seq__17886_17900__$1);
var G__17908 = null;
var G__17909 = 0;
var G__17910 = 0;
seq__17886_17890 = G__17907;
chunk__17887_17891 = G__17908;
count__17888_17892 = G__17909;
i__17889_17893 = G__17910;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_17921 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17917_17922 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17918_17923 = null;var count__17919_17924 = 0;var i__17920_17925 = 0;while(true){
if((i__17920_17925 < count__17919_17924))
{var node_17926 = cljs.core._nth.call(null,chunk__17918_17923,i__17920_17925);node_17926.innerHTML = value_17921;
{
var G__17927 = seq__17917_17922;
var G__17928 = chunk__17918_17923;
var G__17929 = count__17919_17924;
var G__17930 = (i__17920_17925 + 1);
seq__17917_17922 = G__17927;
chunk__17918_17923 = G__17928;
count__17919_17924 = G__17929;
i__17920_17925 = G__17930;
continue;
}
} else
{var temp__4092__auto___17931 = cljs.core.seq.call(null,seq__17917_17922);if(temp__4092__auto___17931)
{var seq__17917_17932__$1 = temp__4092__auto___17931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17917_17932__$1))
{var c__4189__auto___17933 = cljs.core.chunk_first.call(null,seq__17917_17932__$1);{
var G__17934 = cljs.core.chunk_rest.call(null,seq__17917_17932__$1);
var G__17935 = c__4189__auto___17933;
var G__17936 = cljs.core.count.call(null,c__4189__auto___17933);
var G__17937 = 0;
seq__17917_17922 = G__17934;
chunk__17918_17923 = G__17935;
count__17919_17924 = G__17936;
i__17920_17925 = G__17937;
continue;
}
} else
{var node_17938 = cljs.core.first.call(null,seq__17917_17932__$1);node_17938.innerHTML = value_17921;
{
var G__17939 = cljs.core.next.call(null,seq__17917_17932__$1);
var G__17940 = null;
var G__17941 = 0;
var G__17942 = 0;
seq__17917_17922 = G__17939;
chunk__17918_17923 = G__17940;
count__17919_17924 = G__17941;
i__17920_17925 = G__17942;
continue;
}
}
} else
{}
}
break;
}
}catch (e17916){if((e17916 instanceof Error))
{var e_17943 = e17916;domina.replace_children_BANG_.call(null,content,value_17921);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17916;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17950_17954 = cljs.core.seq.call(null,children);var chunk__17951_17955 = null;var count__17952_17956 = 0;var i__17953_17957 = 0;while(true){
if((i__17953_17957 < count__17952_17956))
{var child_17958 = cljs.core._nth.call(null,chunk__17951_17955,i__17953_17957);frag.appendChild(child_17958);
{
var G__17959 = seq__17950_17954;
var G__17960 = chunk__17951_17955;
var G__17961 = count__17952_17956;
var G__17962 = (i__17953_17957 + 1);
seq__17950_17954 = G__17959;
chunk__17951_17955 = G__17960;
count__17952_17956 = G__17961;
i__17953_17957 = G__17962;
continue;
}
} else
{var temp__4092__auto___17963 = cljs.core.seq.call(null,seq__17950_17954);if(temp__4092__auto___17963)
{var seq__17950_17964__$1 = temp__4092__auto___17963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17950_17964__$1))
{var c__4189__auto___17965 = cljs.core.chunk_first.call(null,seq__17950_17964__$1);{
var G__17966 = cljs.core.chunk_rest.call(null,seq__17950_17964__$1);
var G__17967 = c__4189__auto___17965;
var G__17968 = cljs.core.count.call(null,c__4189__auto___17965);
var G__17969 = 0;
seq__17950_17954 = G__17966;
chunk__17951_17955 = G__17967;
count__17952_17956 = G__17968;
i__17953_17957 = G__17969;
continue;
}
} else
{var child_17970 = cljs.core.first.call(null,seq__17950_17964__$1);frag.appendChild(child_17970);
{
var G__17971 = cljs.core.next.call(null,seq__17950_17964__$1);
var G__17972 = null;
var G__17973 = 0;
var G__17974 = 0;
seq__17950_17954 = G__17971;
chunk__17951_17955 = G__17972;
count__17952_17956 = G__17973;
i__17953_17957 = G__17974;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17944_SHARP_,p2__17945_SHARP_){return f.call(null,p1__17944_SHARP_,p2__17945_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__17976 = list_thing;if(G__17976)
{var bit__4091__auto__ = (G__17976.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17976.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17976);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17976);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__17977 = content;if(G__17977)
{var bit__4091__auto__ = (G__17977.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17977.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17977);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17977);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__17978 = content;if(G__17978)
{var bit__4091__auto__ = (G__17978.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17978.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17978.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17978);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
