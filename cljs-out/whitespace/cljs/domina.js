// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_18695 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18697,opt_wrapper_18695,table_section_wrapper_18696,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18695,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18696,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18696,cell_wrapper_18697,table_section_wrapper_18696,table_section_wrapper_18696]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18702 = cljs.core.seq.call(null,tbody);var chunk__18703 = null;var count__18704 = (0);var i__18705 = (0);while(true){
if((i__18705 < count__18704))
{var child = cljs.core._nth.call(null,chunk__18703,i__18705);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18706 = seq__18702;
var G__18707 = chunk__18703;
var G__18708 = count__18704;
var G__18709 = (i__18705 + (1));
seq__18702 = G__18706;
chunk__18703 = G__18707;
count__18704 = G__18708;
i__18705 = G__18709;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18702);if(temp__4126__auto__)
{var seq__18702__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18702__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18702__$1);{
var G__18710 = cljs.core.chunk_rest.call(null,seq__18702__$1);
var G__18711 = c__4299__auto__;
var G__18712 = cljs.core.count.call(null,c__4299__auto__);
var G__18713 = (0);
seq__18702 = G__18710;
chunk__18703 = G__18711;
count__18704 = G__18712;
i__18705 = G__18713;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18702__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18714 = cljs.core.next.call(null,seq__18702__$1);
var G__18715 = null;
var G__18716 = (0);
var G__18717 = (0);
seq__18702 = G__18714;
chunk__18703 = G__18715;
count__18704 = G__18716;
i__18705 = G__18717;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18719 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18719,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18719,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18719,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18720 = wrapper.lastChild;
var G__18721 = (level - (1));
wrapper = G__18720;
level = G__18721;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj18723 = {};return obj18723;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__18724){
var mesg = cljs.core.seq(arglist__18724);
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
log.cljs$lang$applyTo = (function (arglist__18725){
var mesg = cljs.core.seq(arglist__18725);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__18726){
var contents = cljs.core.seq(arglist__18726);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18727_SHARP_){return p1__18727_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18728_SHARP_,p2__18729_SHARP_){return goog.dom.insertChildAt(p1__18728_SHARP_,p2__18729_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18731_SHARP_,p2__18730_SHARP_){return goog.dom.insertSiblingBefore(p2__18730_SHARP_,p1__18731_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18733_SHARP_,p2__18732_SHARP_){return goog.dom.insertSiblingAfter(p2__18732_SHARP_,p1__18733_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18735_SHARP_,p2__18734_SHARP_){return goog.dom.replaceNode(p2__18734_SHARP_,p1__18735_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__18740_18744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18741_18745 = null;var count__18742_18746 = (0);var i__18743_18747 = (0);while(true){
if((i__18743_18747 < count__18742_18746))
{var n_18748 = cljs.core._nth.call(null,chunk__18741_18745,i__18743_18747);goog.style.setStyle(n_18748,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18749 = seq__18740_18744;
var G__18750 = chunk__18741_18745;
var G__18751 = count__18742_18746;
var G__18752 = (i__18743_18747 + (1));
seq__18740_18744 = G__18749;
chunk__18741_18745 = G__18750;
count__18742_18746 = G__18751;
i__18743_18747 = G__18752;
continue;
}
} else
{var temp__4126__auto___18753 = cljs.core.seq.call(null,seq__18740_18744);if(temp__4126__auto___18753)
{var seq__18740_18754__$1 = temp__4126__auto___18753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18740_18754__$1))
{var c__4299__auto___18755 = cljs.core.chunk_first.call(null,seq__18740_18754__$1);{
var G__18756 = cljs.core.chunk_rest.call(null,seq__18740_18754__$1);
var G__18757 = c__4299__auto___18755;
var G__18758 = cljs.core.count.call(null,c__4299__auto___18755);
var G__18759 = (0);
seq__18740_18744 = G__18756;
chunk__18741_18745 = G__18757;
count__18742_18746 = G__18758;
i__18743_18747 = G__18759;
continue;
}
} else
{var n_18760 = cljs.core.first.call(null,seq__18740_18754__$1);goog.style.setStyle(n_18760,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18761 = cljs.core.next.call(null,seq__18740_18754__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__18740_18744 = G__18761;
chunk__18741_18745 = G__18762;
count__18742_18746 = G__18763;
i__18743_18747 = G__18764;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18765){
var content = cljs.core.first(arglist__18765);
arglist__18765 = cljs.core.next(arglist__18765);
var name = cljs.core.first(arglist__18765);
var value = cljs.core.rest(arglist__18765);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__18770_18774 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18771_18775 = null;var count__18772_18776 = (0);var i__18773_18777 = (0);while(true){
if((i__18773_18777 < count__18772_18776))
{var n_18778 = cljs.core._nth.call(null,chunk__18771_18775,i__18773_18777);n_18778.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18779 = seq__18770_18774;
var G__18780 = chunk__18771_18775;
var G__18781 = count__18772_18776;
var G__18782 = (i__18773_18777 + (1));
seq__18770_18774 = G__18779;
chunk__18771_18775 = G__18780;
count__18772_18776 = G__18781;
i__18773_18777 = G__18782;
continue;
}
} else
{var temp__4126__auto___18783 = cljs.core.seq.call(null,seq__18770_18774);if(temp__4126__auto___18783)
{var seq__18770_18784__$1 = temp__4126__auto___18783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18770_18784__$1))
{var c__4299__auto___18785 = cljs.core.chunk_first.call(null,seq__18770_18784__$1);{
var G__18786 = cljs.core.chunk_rest.call(null,seq__18770_18784__$1);
var G__18787 = c__4299__auto___18785;
var G__18788 = cljs.core.count.call(null,c__4299__auto___18785);
var G__18789 = (0);
seq__18770_18774 = G__18786;
chunk__18771_18775 = G__18787;
count__18772_18776 = G__18788;
i__18773_18777 = G__18789;
continue;
}
} else
{var n_18790 = cljs.core.first.call(null,seq__18770_18784__$1);n_18790.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18791 = cljs.core.next.call(null,seq__18770_18784__$1);
var G__18792 = null;
var G__18793 = (0);
var G__18794 = (0);
seq__18770_18774 = G__18791;
chunk__18771_18775 = G__18792;
count__18772_18776 = G__18793;
i__18773_18777 = G__18794;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18795){
var content = cljs.core.first(arglist__18795);
arglist__18795 = cljs.core.next(arglist__18795);
var name = cljs.core.first(arglist__18795);
var value = cljs.core.rest(arglist__18795);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18800_18804 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18801_18805 = null;var count__18802_18806 = (0);var i__18803_18807 = (0);while(true){
if((i__18803_18807 < count__18802_18806))
{var n_18808 = cljs.core._nth.call(null,chunk__18801_18805,i__18803_18807);n_18808.removeAttribute(cljs.core.name.call(null,name));
{
var G__18809 = seq__18800_18804;
var G__18810 = chunk__18801_18805;
var G__18811 = count__18802_18806;
var G__18812 = (i__18803_18807 + (1));
seq__18800_18804 = G__18809;
chunk__18801_18805 = G__18810;
count__18802_18806 = G__18811;
i__18803_18807 = G__18812;
continue;
}
} else
{var temp__4126__auto___18813 = cljs.core.seq.call(null,seq__18800_18804);if(temp__4126__auto___18813)
{var seq__18800_18814__$1 = temp__4126__auto___18813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18800_18814__$1))
{var c__4299__auto___18815 = cljs.core.chunk_first.call(null,seq__18800_18814__$1);{
var G__18816 = cljs.core.chunk_rest.call(null,seq__18800_18814__$1);
var G__18817 = c__4299__auto___18815;
var G__18818 = cljs.core.count.call(null,c__4299__auto___18815);
var G__18819 = (0);
seq__18800_18804 = G__18816;
chunk__18801_18805 = G__18817;
count__18802_18806 = G__18818;
i__18803_18807 = G__18819;
continue;
}
} else
{var n_18820 = cljs.core.first.call(null,seq__18800_18814__$1);n_18820.removeAttribute(cljs.core.name.call(null,name));
{
var G__18821 = cljs.core.next.call(null,seq__18800_18814__$1);
var G__18822 = null;
var G__18823 = (0);
var G__18824 = (0);
seq__18800_18804 = G__18821;
chunk__18801_18805 = G__18822;
count__18802_18806 = G__18823;
i__18803_18807 = G__18824;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18826 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18826,(0),null);var v = cljs.core.nth.call(null,vec__18826,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__18827_SHARP_){var attr = attrs__$1.item(p1__18827_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18834_18840 = cljs.core.seq.call(null,styles);var chunk__18835_18841 = null;var count__18836_18842 = (0);var i__18837_18843 = (0);while(true){
if((i__18837_18843 < count__18836_18842))
{var vec__18838_18844 = cljs.core._nth.call(null,chunk__18835_18841,i__18837_18843);var name_18845 = cljs.core.nth.call(null,vec__18838_18844,(0),null);var value_18846 = cljs.core.nth.call(null,vec__18838_18844,(1),null);domina.set_style_BANG_.call(null,content,name_18845,value_18846);
{
var G__18847 = seq__18834_18840;
var G__18848 = chunk__18835_18841;
var G__18849 = count__18836_18842;
var G__18850 = (i__18837_18843 + (1));
seq__18834_18840 = G__18847;
chunk__18835_18841 = G__18848;
count__18836_18842 = G__18849;
i__18837_18843 = G__18850;
continue;
}
} else
{var temp__4126__auto___18851 = cljs.core.seq.call(null,seq__18834_18840);if(temp__4126__auto___18851)
{var seq__18834_18852__$1 = temp__4126__auto___18851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18834_18852__$1))
{var c__4299__auto___18853 = cljs.core.chunk_first.call(null,seq__18834_18852__$1);{
var G__18854 = cljs.core.chunk_rest.call(null,seq__18834_18852__$1);
var G__18855 = c__4299__auto___18853;
var G__18856 = cljs.core.count.call(null,c__4299__auto___18853);
var G__18857 = (0);
seq__18834_18840 = G__18854;
chunk__18835_18841 = G__18855;
count__18836_18842 = G__18856;
i__18837_18843 = G__18857;
continue;
}
} else
{var vec__18839_18858 = cljs.core.first.call(null,seq__18834_18852__$1);var name_18859 = cljs.core.nth.call(null,vec__18839_18858,(0),null);var value_18860 = cljs.core.nth.call(null,vec__18839_18858,(1),null);domina.set_style_BANG_.call(null,content,name_18859,value_18860);
{
var G__18861 = cljs.core.next.call(null,seq__18834_18852__$1);
var G__18862 = null;
var G__18863 = (0);
var G__18864 = (0);
seq__18834_18840 = G__18861;
chunk__18835_18841 = G__18862;
count__18836_18842 = G__18863;
i__18837_18843 = G__18864;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18871_18877 = cljs.core.seq.call(null,attrs);var chunk__18872_18878 = null;var count__18873_18879 = (0);var i__18874_18880 = (0);while(true){
if((i__18874_18880 < count__18873_18879))
{var vec__18875_18881 = cljs.core._nth.call(null,chunk__18872_18878,i__18874_18880);var name_18882 = cljs.core.nth.call(null,vec__18875_18881,(0),null);var value_18883 = cljs.core.nth.call(null,vec__18875_18881,(1),null);domina.set_attr_BANG_.call(null,content,name_18882,value_18883);
{
var G__18884 = seq__18871_18877;
var G__18885 = chunk__18872_18878;
var G__18886 = count__18873_18879;
var G__18887 = (i__18874_18880 + (1));
seq__18871_18877 = G__18884;
chunk__18872_18878 = G__18885;
count__18873_18879 = G__18886;
i__18874_18880 = G__18887;
continue;
}
} else
{var temp__4126__auto___18888 = cljs.core.seq.call(null,seq__18871_18877);if(temp__4126__auto___18888)
{var seq__18871_18889__$1 = temp__4126__auto___18888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18871_18889__$1))
{var c__4299__auto___18890 = cljs.core.chunk_first.call(null,seq__18871_18889__$1);{
var G__18891 = cljs.core.chunk_rest.call(null,seq__18871_18889__$1);
var G__18892 = c__4299__auto___18890;
var G__18893 = cljs.core.count.call(null,c__4299__auto___18890);
var G__18894 = (0);
seq__18871_18877 = G__18891;
chunk__18872_18878 = G__18892;
count__18873_18879 = G__18893;
i__18874_18880 = G__18894;
continue;
}
} else
{var vec__18876_18895 = cljs.core.first.call(null,seq__18871_18889__$1);var name_18896 = cljs.core.nth.call(null,vec__18876_18895,(0),null);var value_18897 = cljs.core.nth.call(null,vec__18876_18895,(1),null);domina.set_attr_BANG_.call(null,content,name_18896,value_18897);
{
var G__18898 = cljs.core.next.call(null,seq__18871_18889__$1);
var G__18899 = null;
var G__18900 = (0);
var G__18901 = (0);
seq__18871_18877 = G__18898;
chunk__18872_18878 = G__18899;
count__18873_18879 = G__18900;
i__18874_18880 = G__18901;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18906_18910 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18907_18911 = null;var count__18908_18912 = (0);var i__18909_18913 = (0);while(true){
if((i__18909_18913 < count__18908_18912))
{var node_18914 = cljs.core._nth.call(null,chunk__18907_18911,i__18909_18913);goog.dom.classes.add(node_18914,class$);
{
var G__18915 = seq__18906_18910;
var G__18916 = chunk__18907_18911;
var G__18917 = count__18908_18912;
var G__18918 = (i__18909_18913 + (1));
seq__18906_18910 = G__18915;
chunk__18907_18911 = G__18916;
count__18908_18912 = G__18917;
i__18909_18913 = G__18918;
continue;
}
} else
{var temp__4126__auto___18919 = cljs.core.seq.call(null,seq__18906_18910);if(temp__4126__auto___18919)
{var seq__18906_18920__$1 = temp__4126__auto___18919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18906_18920__$1))
{var c__4299__auto___18921 = cljs.core.chunk_first.call(null,seq__18906_18920__$1);{
var G__18922 = cljs.core.chunk_rest.call(null,seq__18906_18920__$1);
var G__18923 = c__4299__auto___18921;
var G__18924 = cljs.core.count.call(null,c__4299__auto___18921);
var G__18925 = (0);
seq__18906_18910 = G__18922;
chunk__18907_18911 = G__18923;
count__18908_18912 = G__18924;
i__18909_18913 = G__18925;
continue;
}
} else
{var node_18926 = cljs.core.first.call(null,seq__18906_18920__$1);goog.dom.classes.add(node_18926,class$);
{
var G__18927 = cljs.core.next.call(null,seq__18906_18920__$1);
var G__18928 = null;
var G__18929 = (0);
var G__18930 = (0);
seq__18906_18910 = G__18927;
chunk__18907_18911 = G__18928;
count__18908_18912 = G__18929;
i__18909_18913 = G__18930;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18935_18939 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18936_18940 = null;var count__18937_18941 = (0);var i__18938_18942 = (0);while(true){
if((i__18938_18942 < count__18937_18941))
{var node_18943 = cljs.core._nth.call(null,chunk__18936_18940,i__18938_18942);goog.dom.classes.remove(node_18943,class$);
{
var G__18944 = seq__18935_18939;
var G__18945 = chunk__18936_18940;
var G__18946 = count__18937_18941;
var G__18947 = (i__18938_18942 + (1));
seq__18935_18939 = G__18944;
chunk__18936_18940 = G__18945;
count__18937_18941 = G__18946;
i__18938_18942 = G__18947;
continue;
}
} else
{var temp__4126__auto___18948 = cljs.core.seq.call(null,seq__18935_18939);if(temp__4126__auto___18948)
{var seq__18935_18949__$1 = temp__4126__auto___18948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18935_18949__$1))
{var c__4299__auto___18950 = cljs.core.chunk_first.call(null,seq__18935_18949__$1);{
var G__18951 = cljs.core.chunk_rest.call(null,seq__18935_18949__$1);
var G__18952 = c__4299__auto___18950;
var G__18953 = cljs.core.count.call(null,c__4299__auto___18950);
var G__18954 = (0);
seq__18935_18939 = G__18951;
chunk__18936_18940 = G__18952;
count__18937_18941 = G__18953;
i__18938_18942 = G__18954;
continue;
}
} else
{var node_18955 = cljs.core.first.call(null,seq__18935_18949__$1);goog.dom.classes.remove(node_18955,class$);
{
var G__18956 = cljs.core.next.call(null,seq__18935_18949__$1);
var G__18957 = null;
var G__18958 = (0);
var G__18959 = (0);
seq__18935_18939 = G__18956;
chunk__18936_18940 = G__18957;
count__18937_18941 = G__18958;
i__18938_18942 = G__18959;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18964_18968 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18965_18969 = null;var count__18966_18970 = (0);var i__18967_18971 = (0);while(true){
if((i__18967_18971 < count__18966_18970))
{var node_18972 = cljs.core._nth.call(null,chunk__18965_18969,i__18967_18971);goog.dom.classes.toggle(node_18972,class$);
{
var G__18973 = seq__18964_18968;
var G__18974 = chunk__18965_18969;
var G__18975 = count__18966_18970;
var G__18976 = (i__18967_18971 + (1));
seq__18964_18968 = G__18973;
chunk__18965_18969 = G__18974;
count__18966_18970 = G__18975;
i__18967_18971 = G__18976;
continue;
}
} else
{var temp__4126__auto___18977 = cljs.core.seq.call(null,seq__18964_18968);if(temp__4126__auto___18977)
{var seq__18964_18978__$1 = temp__4126__auto___18977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18964_18978__$1))
{var c__4299__auto___18979 = cljs.core.chunk_first.call(null,seq__18964_18978__$1);{
var G__18980 = cljs.core.chunk_rest.call(null,seq__18964_18978__$1);
var G__18981 = c__4299__auto___18979;
var G__18982 = cljs.core.count.call(null,c__4299__auto___18979);
var G__18983 = (0);
seq__18964_18968 = G__18980;
chunk__18965_18969 = G__18981;
count__18966_18970 = G__18982;
i__18967_18971 = G__18983;
continue;
}
} else
{var node_18984 = cljs.core.first.call(null,seq__18964_18978__$1);goog.dom.classes.toggle(node_18984,class$);
{
var G__18985 = cljs.core.next.call(null,seq__18964_18978__$1);
var G__18986 = null;
var G__18987 = (0);
var G__18988 = (0);
seq__18964_18968 = G__18985;
chunk__18965_18969 = G__18986;
count__18966_18970 = G__18987;
i__18967_18971 = G__18988;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18997__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18993_18998 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18994_18999 = null;var count__18995_19000 = (0);var i__18996_19001 = (0);while(true){
if((i__18996_19001 < count__18995_19000))
{var node_19002 = cljs.core._nth.call(null,chunk__18994_18999,i__18996_19001);goog.dom.classes.set(node_19002,classes_18997__$1);
{
var G__19003 = seq__18993_18998;
var G__19004 = chunk__18994_18999;
var G__19005 = count__18995_19000;
var G__19006 = (i__18996_19001 + (1));
seq__18993_18998 = G__19003;
chunk__18994_18999 = G__19004;
count__18995_19000 = G__19005;
i__18996_19001 = G__19006;
continue;
}
} else
{var temp__4126__auto___19007 = cljs.core.seq.call(null,seq__18993_18998);if(temp__4126__auto___19007)
{var seq__18993_19008__$1 = temp__4126__auto___19007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18993_19008__$1))
{var c__4299__auto___19009 = cljs.core.chunk_first.call(null,seq__18993_19008__$1);{
var G__19010 = cljs.core.chunk_rest.call(null,seq__18993_19008__$1);
var G__19011 = c__4299__auto___19009;
var G__19012 = cljs.core.count.call(null,c__4299__auto___19009);
var G__19013 = (0);
seq__18993_18998 = G__19010;
chunk__18994_18999 = G__19011;
count__18995_19000 = G__19012;
i__18996_19001 = G__19013;
continue;
}
} else
{var node_19014 = cljs.core.first.call(null,seq__18993_19008__$1);goog.dom.classes.set(node_19014,classes_18997__$1);
{
var G__19015 = cljs.core.next.call(null,seq__18993_19008__$1);
var G__19016 = null;
var G__19017 = (0);
var G__19018 = (0);
seq__18993_18998 = G__19015;
chunk__18994_18999 = G__19016;
count__18995_19000 = G__19017;
i__18996_19001 = G__19018;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19023_19027 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19024_19028 = null;var count__19025_19029 = (0);var i__19026_19030 = (0);while(true){
if((i__19026_19030 < count__19025_19029))
{var node_19031 = cljs.core._nth.call(null,chunk__19024_19028,i__19026_19030);goog.dom.setTextContent(node_19031,value);
{
var G__19032 = seq__19023_19027;
var G__19033 = chunk__19024_19028;
var G__19034 = count__19025_19029;
var G__19035 = (i__19026_19030 + (1));
seq__19023_19027 = G__19032;
chunk__19024_19028 = G__19033;
count__19025_19029 = G__19034;
i__19026_19030 = G__19035;
continue;
}
} else
{var temp__4126__auto___19036 = cljs.core.seq.call(null,seq__19023_19027);if(temp__4126__auto___19036)
{var seq__19023_19037__$1 = temp__4126__auto___19036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19023_19037__$1))
{var c__4299__auto___19038 = cljs.core.chunk_first.call(null,seq__19023_19037__$1);{
var G__19039 = cljs.core.chunk_rest.call(null,seq__19023_19037__$1);
var G__19040 = c__4299__auto___19038;
var G__19041 = cljs.core.count.call(null,c__4299__auto___19038);
var G__19042 = (0);
seq__19023_19027 = G__19039;
chunk__19024_19028 = G__19040;
count__19025_19029 = G__19041;
i__19026_19030 = G__19042;
continue;
}
} else
{var node_19043 = cljs.core.first.call(null,seq__19023_19037__$1);goog.dom.setTextContent(node_19043,value);
{
var G__19044 = cljs.core.next.call(null,seq__19023_19037__$1);
var G__19045 = null;
var G__19046 = (0);
var G__19047 = (0);
seq__19023_19027 = G__19044;
chunk__19024_19028 = G__19045;
count__19025_19029 = G__19046;
i__19026_19030 = G__19047;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19052_19056 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19053_19057 = null;var count__19054_19058 = (0);var i__19055_19059 = (0);while(true){
if((i__19055_19059 < count__19054_19058))
{var node_19060 = cljs.core._nth.call(null,chunk__19053_19057,i__19055_19059);goog.dom.forms.setValue(node_19060,value);
{
var G__19061 = seq__19052_19056;
var G__19062 = chunk__19053_19057;
var G__19063 = count__19054_19058;
var G__19064 = (i__19055_19059 + (1));
seq__19052_19056 = G__19061;
chunk__19053_19057 = G__19062;
count__19054_19058 = G__19063;
i__19055_19059 = G__19064;
continue;
}
} else
{var temp__4126__auto___19065 = cljs.core.seq.call(null,seq__19052_19056);if(temp__4126__auto___19065)
{var seq__19052_19066__$1 = temp__4126__auto___19065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19052_19066__$1))
{var c__4299__auto___19067 = cljs.core.chunk_first.call(null,seq__19052_19066__$1);{
var G__19068 = cljs.core.chunk_rest.call(null,seq__19052_19066__$1);
var G__19069 = c__4299__auto___19067;
var G__19070 = cljs.core.count.call(null,c__4299__auto___19067);
var G__19071 = (0);
seq__19052_19056 = G__19068;
chunk__19053_19057 = G__19069;
count__19054_19058 = G__19070;
i__19055_19059 = G__19071;
continue;
}
} else
{var node_19072 = cljs.core.first.call(null,seq__19052_19066__$1);goog.dom.forms.setValue(node_19072,value);
{
var G__19073 = cljs.core.next.call(null,seq__19052_19066__$1);
var G__19074 = null;
var G__19075 = (0);
var G__19076 = (0);
seq__19052_19056 = G__19073;
chunk__19053_19057 = G__19074;
count__19054_19058 = G__19075;
i__19055_19059 = G__19076;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_19087 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19083_19088 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19084_19089 = null;var count__19085_19090 = (0);var i__19086_19091 = (0);while(true){
if((i__19086_19091 < count__19085_19090))
{var node_19092 = cljs.core._nth.call(null,chunk__19084_19089,i__19086_19091);node_19092.innerHTML = value_19087;
{
var G__19093 = seq__19083_19088;
var G__19094 = chunk__19084_19089;
var G__19095 = count__19085_19090;
var G__19096 = (i__19086_19091 + (1));
seq__19083_19088 = G__19093;
chunk__19084_19089 = G__19094;
count__19085_19090 = G__19095;
i__19086_19091 = G__19096;
continue;
}
} else
{var temp__4126__auto___19097 = cljs.core.seq.call(null,seq__19083_19088);if(temp__4126__auto___19097)
{var seq__19083_19098__$1 = temp__4126__auto___19097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19083_19098__$1))
{var c__4299__auto___19099 = cljs.core.chunk_first.call(null,seq__19083_19098__$1);{
var G__19100 = cljs.core.chunk_rest.call(null,seq__19083_19098__$1);
var G__19101 = c__4299__auto___19099;
var G__19102 = cljs.core.count.call(null,c__4299__auto___19099);
var G__19103 = (0);
seq__19083_19088 = G__19100;
chunk__19084_19089 = G__19101;
count__19085_19090 = G__19102;
i__19086_19091 = G__19103;
continue;
}
} else
{var node_19104 = cljs.core.first.call(null,seq__19083_19098__$1);node_19104.innerHTML = value_19087;
{
var G__19105 = cljs.core.next.call(null,seq__19083_19098__$1);
var G__19106 = null;
var G__19107 = (0);
var G__19108 = (0);
seq__19083_19088 = G__19105;
chunk__19084_19089 = G__19106;
count__19085_19090 = G__19107;
i__19086_19091 = G__19108;
continue;
}
}
} else
{}
}
break;
}
}catch (e19082){if((e19082 instanceof Error))
{var e_19109 = e19082;domina.replace_children_BANG_.call(null,content,value_19087);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19082;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19116_19120 = cljs.core.seq.call(null,children);var chunk__19117_19121 = null;var count__19118_19122 = (0);var i__19119_19123 = (0);while(true){
if((i__19119_19123 < count__19118_19122))
{var child_19124 = cljs.core._nth.call(null,chunk__19117_19121,i__19119_19123);frag.appendChild(child_19124);
{
var G__19125 = seq__19116_19120;
var G__19126 = chunk__19117_19121;
var G__19127 = count__19118_19122;
var G__19128 = (i__19119_19123 + (1));
seq__19116_19120 = G__19125;
chunk__19117_19121 = G__19126;
count__19118_19122 = G__19127;
i__19119_19123 = G__19128;
continue;
}
} else
{var temp__4126__auto___19129 = cljs.core.seq.call(null,seq__19116_19120);if(temp__4126__auto___19129)
{var seq__19116_19130__$1 = temp__4126__auto___19129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19116_19130__$1))
{var c__4299__auto___19131 = cljs.core.chunk_first.call(null,seq__19116_19130__$1);{
var G__19132 = cljs.core.chunk_rest.call(null,seq__19116_19130__$1);
var G__19133 = c__4299__auto___19131;
var G__19134 = cljs.core.count.call(null,c__4299__auto___19131);
var G__19135 = (0);
seq__19116_19120 = G__19132;
chunk__19117_19121 = G__19133;
count__19118_19122 = G__19134;
i__19119_19123 = G__19135;
continue;
}
} else
{var child_19136 = cljs.core.first.call(null,seq__19116_19130__$1);frag.appendChild(child_19136);
{
var G__19137 = cljs.core.next.call(null,seq__19116_19130__$1);
var G__19138 = null;
var G__19139 = (0);
var G__19140 = (0);
seq__19116_19120 = G__19137;
chunk__19117_19121 = G__19138;
count__19118_19122 = G__19139;
i__19119_19123 = G__19140;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19110_SHARP_,p2__19111_SHARP_){return f.call(null,p1__19110_SHARP_,p2__19111_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__19142 = list_thing;if(G__19142)
{var bit__4193__auto__ = (G__19142.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19142.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19142);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__19143 = content;if(G__19143)
{var bit__4193__auto__ = (G__19143.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19143.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19143.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19143);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__19144 = content;if(G__19144)
{var bit__4193__auto__ = (G__19144.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19144.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19144);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19144);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
