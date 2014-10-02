// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_58783 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_58784 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_58785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_58785,opt_wrapper_58783,table_section_wrapper_58784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_58783,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_58784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_58784,cell_wrapper_58785,table_section_wrapper_58784,table_section_wrapper_58784]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__58790 = cljs.core.seq.call(null,tbody);var chunk__58791 = null;var count__58792 = (0);var i__58793 = (0);while(true){
if((i__58793 < count__58792))
{var child = cljs.core._nth.call(null,chunk__58791,i__58793);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__58794 = seq__58790;
var G__58795 = chunk__58791;
var G__58796 = count__58792;
var G__58797 = (i__58793 + (1));
seq__58790 = G__58794;
chunk__58791 = G__58795;
count__58792 = G__58796;
i__58793 = G__58797;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__58790);if(temp__4126__auto__)
{var seq__58790__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58790__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__58790__$1);{
var G__58798 = cljs.core.chunk_rest.call(null,seq__58790__$1);
var G__58799 = c__4314__auto__;
var G__58800 = cljs.core.count.call(null,c__4314__auto__);
var G__58801 = (0);
seq__58790 = G__58798;
chunk__58791 = G__58799;
count__58792 = G__58800;
i__58793 = G__58801;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__58790__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__58802 = cljs.core.next.call(null,seq__58790__$1);
var G__58803 = null;
var G__58804 = (0);
var G__58805 = (0);
seq__58790 = G__58802;
chunk__58791 = G__58803;
count__58792 = G__58804;
i__58793 = G__58805;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__58807 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__58807,(0),null);var start_wrap = cljs.core.nth.call(null,vec__58807,(1),null);var end_wrap = cljs.core.nth.call(null,vec__58807,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__58808 = wrapper.lastChild;
var G__58809 = (level - (1));
wrapper = G__58808;
level = G__58809;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj58811 = {};return obj58811;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__58812){
var mesg = cljs.core.seq(arglist__58812);
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
log.cljs$lang$applyTo = (function (arglist__58813){
var mesg = cljs.core.seq(arglist__58813);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__58814){
var contents = cljs.core.seq(arglist__58814);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__58815_SHARP_){return p1__58815_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__58816_SHARP_,p2__58817_SHARP_){return goog.dom.insertChildAt(p1__58816_SHARP_,p2__58817_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__58819_SHARP_,p2__58818_SHARP_){return goog.dom.insertSiblingBefore(p2__58818_SHARP_,p1__58819_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__58821_SHARP_,p2__58820_SHARP_){return goog.dom.insertSiblingAfter(p2__58820_SHARP_,p1__58821_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__58823_SHARP_,p2__58822_SHARP_){return goog.dom.replaceNode(p2__58822_SHARP_,p1__58823_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__58828_58832 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58829_58833 = null;var count__58830_58834 = (0);var i__58831_58835 = (0);while(true){
if((i__58831_58835 < count__58830_58834))
{var n_58836 = cljs.core._nth.call(null,chunk__58829_58833,i__58831_58835);goog.style.setStyle(n_58836,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__58837 = seq__58828_58832;
var G__58838 = chunk__58829_58833;
var G__58839 = count__58830_58834;
var G__58840 = (i__58831_58835 + (1));
seq__58828_58832 = G__58837;
chunk__58829_58833 = G__58838;
count__58830_58834 = G__58839;
i__58831_58835 = G__58840;
continue;
}
} else
{var temp__4126__auto___58841 = cljs.core.seq.call(null,seq__58828_58832);if(temp__4126__auto___58841)
{var seq__58828_58842__$1 = temp__4126__auto___58841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58828_58842__$1))
{var c__4314__auto___58843 = cljs.core.chunk_first.call(null,seq__58828_58842__$1);{
var G__58844 = cljs.core.chunk_rest.call(null,seq__58828_58842__$1);
var G__58845 = c__4314__auto___58843;
var G__58846 = cljs.core.count.call(null,c__4314__auto___58843);
var G__58847 = (0);
seq__58828_58832 = G__58844;
chunk__58829_58833 = G__58845;
count__58830_58834 = G__58846;
i__58831_58835 = G__58847;
continue;
}
} else
{var n_58848 = cljs.core.first.call(null,seq__58828_58842__$1);goog.style.setStyle(n_58848,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__58849 = cljs.core.next.call(null,seq__58828_58842__$1);
var G__58850 = null;
var G__58851 = (0);
var G__58852 = (0);
seq__58828_58832 = G__58849;
chunk__58829_58833 = G__58850;
count__58830_58834 = G__58851;
i__58831_58835 = G__58852;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__58853){
var content = cljs.core.first(arglist__58853);
arglist__58853 = cljs.core.next(arglist__58853);
var name = cljs.core.first(arglist__58853);
var value = cljs.core.rest(arglist__58853);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__58858_58862 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58859_58863 = null;var count__58860_58864 = (0);var i__58861_58865 = (0);while(true){
if((i__58861_58865 < count__58860_58864))
{var n_58866 = cljs.core._nth.call(null,chunk__58859_58863,i__58861_58865);n_58866.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__58867 = seq__58858_58862;
var G__58868 = chunk__58859_58863;
var G__58869 = count__58860_58864;
var G__58870 = (i__58861_58865 + (1));
seq__58858_58862 = G__58867;
chunk__58859_58863 = G__58868;
count__58860_58864 = G__58869;
i__58861_58865 = G__58870;
continue;
}
} else
{var temp__4126__auto___58871 = cljs.core.seq.call(null,seq__58858_58862);if(temp__4126__auto___58871)
{var seq__58858_58872__$1 = temp__4126__auto___58871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58858_58872__$1))
{var c__4314__auto___58873 = cljs.core.chunk_first.call(null,seq__58858_58872__$1);{
var G__58874 = cljs.core.chunk_rest.call(null,seq__58858_58872__$1);
var G__58875 = c__4314__auto___58873;
var G__58876 = cljs.core.count.call(null,c__4314__auto___58873);
var G__58877 = (0);
seq__58858_58862 = G__58874;
chunk__58859_58863 = G__58875;
count__58860_58864 = G__58876;
i__58861_58865 = G__58877;
continue;
}
} else
{var n_58878 = cljs.core.first.call(null,seq__58858_58872__$1);n_58878.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__58879 = cljs.core.next.call(null,seq__58858_58872__$1);
var G__58880 = null;
var G__58881 = (0);
var G__58882 = (0);
seq__58858_58862 = G__58879;
chunk__58859_58863 = G__58880;
count__58860_58864 = G__58881;
i__58861_58865 = G__58882;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__58883){
var content = cljs.core.first(arglist__58883);
arglist__58883 = cljs.core.next(arglist__58883);
var name = cljs.core.first(arglist__58883);
var value = cljs.core.rest(arglist__58883);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__58888_58892 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58889_58893 = null;var count__58890_58894 = (0);var i__58891_58895 = (0);while(true){
if((i__58891_58895 < count__58890_58894))
{var n_58896 = cljs.core._nth.call(null,chunk__58889_58893,i__58891_58895);n_58896.removeAttribute(cljs.core.name.call(null,name));
{
var G__58897 = seq__58888_58892;
var G__58898 = chunk__58889_58893;
var G__58899 = count__58890_58894;
var G__58900 = (i__58891_58895 + (1));
seq__58888_58892 = G__58897;
chunk__58889_58893 = G__58898;
count__58890_58894 = G__58899;
i__58891_58895 = G__58900;
continue;
}
} else
{var temp__4126__auto___58901 = cljs.core.seq.call(null,seq__58888_58892);if(temp__4126__auto___58901)
{var seq__58888_58902__$1 = temp__4126__auto___58901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58888_58902__$1))
{var c__4314__auto___58903 = cljs.core.chunk_first.call(null,seq__58888_58902__$1);{
var G__58904 = cljs.core.chunk_rest.call(null,seq__58888_58902__$1);
var G__58905 = c__4314__auto___58903;
var G__58906 = cljs.core.count.call(null,c__4314__auto___58903);
var G__58907 = (0);
seq__58888_58892 = G__58904;
chunk__58889_58893 = G__58905;
count__58890_58894 = G__58906;
i__58891_58895 = G__58907;
continue;
}
} else
{var n_58908 = cljs.core.first.call(null,seq__58888_58902__$1);n_58908.removeAttribute(cljs.core.name.call(null,name));
{
var G__58909 = cljs.core.next.call(null,seq__58888_58902__$1);
var G__58910 = null;
var G__58911 = (0);
var G__58912 = (0);
seq__58888_58892 = G__58909;
chunk__58889_58893 = G__58910;
count__58890_58894 = G__58911;
i__58891_58895 = G__58912;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__58914 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__58914,(0),null);var v = cljs.core.nth.call(null,vec__58914,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__58915_SHARP_){var attr = attrs__$1.item(p1__58915_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__58922_58928 = cljs.core.seq.call(null,styles);var chunk__58923_58929 = null;var count__58924_58930 = (0);var i__58925_58931 = (0);while(true){
if((i__58925_58931 < count__58924_58930))
{var vec__58926_58932 = cljs.core._nth.call(null,chunk__58923_58929,i__58925_58931);var name_58933 = cljs.core.nth.call(null,vec__58926_58932,(0),null);var value_58934 = cljs.core.nth.call(null,vec__58926_58932,(1),null);domina.set_style_BANG_.call(null,content,name_58933,value_58934);
{
var G__58935 = seq__58922_58928;
var G__58936 = chunk__58923_58929;
var G__58937 = count__58924_58930;
var G__58938 = (i__58925_58931 + (1));
seq__58922_58928 = G__58935;
chunk__58923_58929 = G__58936;
count__58924_58930 = G__58937;
i__58925_58931 = G__58938;
continue;
}
} else
{var temp__4126__auto___58939 = cljs.core.seq.call(null,seq__58922_58928);if(temp__4126__auto___58939)
{var seq__58922_58940__$1 = temp__4126__auto___58939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58922_58940__$1))
{var c__4314__auto___58941 = cljs.core.chunk_first.call(null,seq__58922_58940__$1);{
var G__58942 = cljs.core.chunk_rest.call(null,seq__58922_58940__$1);
var G__58943 = c__4314__auto___58941;
var G__58944 = cljs.core.count.call(null,c__4314__auto___58941);
var G__58945 = (0);
seq__58922_58928 = G__58942;
chunk__58923_58929 = G__58943;
count__58924_58930 = G__58944;
i__58925_58931 = G__58945;
continue;
}
} else
{var vec__58927_58946 = cljs.core.first.call(null,seq__58922_58940__$1);var name_58947 = cljs.core.nth.call(null,vec__58927_58946,(0),null);var value_58948 = cljs.core.nth.call(null,vec__58927_58946,(1),null);domina.set_style_BANG_.call(null,content,name_58947,value_58948);
{
var G__58949 = cljs.core.next.call(null,seq__58922_58940__$1);
var G__58950 = null;
var G__58951 = (0);
var G__58952 = (0);
seq__58922_58928 = G__58949;
chunk__58923_58929 = G__58950;
count__58924_58930 = G__58951;
i__58925_58931 = G__58952;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__58959_58965 = cljs.core.seq.call(null,attrs);var chunk__58960_58966 = null;var count__58961_58967 = (0);var i__58962_58968 = (0);while(true){
if((i__58962_58968 < count__58961_58967))
{var vec__58963_58969 = cljs.core._nth.call(null,chunk__58960_58966,i__58962_58968);var name_58970 = cljs.core.nth.call(null,vec__58963_58969,(0),null);var value_58971 = cljs.core.nth.call(null,vec__58963_58969,(1),null);domina.set_attr_BANG_.call(null,content,name_58970,value_58971);
{
var G__58972 = seq__58959_58965;
var G__58973 = chunk__58960_58966;
var G__58974 = count__58961_58967;
var G__58975 = (i__58962_58968 + (1));
seq__58959_58965 = G__58972;
chunk__58960_58966 = G__58973;
count__58961_58967 = G__58974;
i__58962_58968 = G__58975;
continue;
}
} else
{var temp__4126__auto___58976 = cljs.core.seq.call(null,seq__58959_58965);if(temp__4126__auto___58976)
{var seq__58959_58977__$1 = temp__4126__auto___58976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58959_58977__$1))
{var c__4314__auto___58978 = cljs.core.chunk_first.call(null,seq__58959_58977__$1);{
var G__58979 = cljs.core.chunk_rest.call(null,seq__58959_58977__$1);
var G__58980 = c__4314__auto___58978;
var G__58981 = cljs.core.count.call(null,c__4314__auto___58978);
var G__58982 = (0);
seq__58959_58965 = G__58979;
chunk__58960_58966 = G__58980;
count__58961_58967 = G__58981;
i__58962_58968 = G__58982;
continue;
}
} else
{var vec__58964_58983 = cljs.core.first.call(null,seq__58959_58977__$1);var name_58984 = cljs.core.nth.call(null,vec__58964_58983,(0),null);var value_58985 = cljs.core.nth.call(null,vec__58964_58983,(1),null);domina.set_attr_BANG_.call(null,content,name_58984,value_58985);
{
var G__58986 = cljs.core.next.call(null,seq__58959_58977__$1);
var G__58987 = null;
var G__58988 = (0);
var G__58989 = (0);
seq__58959_58965 = G__58986;
chunk__58960_58966 = G__58987;
count__58961_58967 = G__58988;
i__58962_58968 = G__58989;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__58994_58998 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58995_58999 = null;var count__58996_59000 = (0);var i__58997_59001 = (0);while(true){
if((i__58997_59001 < count__58996_59000))
{var node_59002 = cljs.core._nth.call(null,chunk__58995_58999,i__58997_59001);goog.dom.classes.add(node_59002,class$);
{
var G__59003 = seq__58994_58998;
var G__59004 = chunk__58995_58999;
var G__59005 = count__58996_59000;
var G__59006 = (i__58997_59001 + (1));
seq__58994_58998 = G__59003;
chunk__58995_58999 = G__59004;
count__58996_59000 = G__59005;
i__58997_59001 = G__59006;
continue;
}
} else
{var temp__4126__auto___59007 = cljs.core.seq.call(null,seq__58994_58998);if(temp__4126__auto___59007)
{var seq__58994_59008__$1 = temp__4126__auto___59007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58994_59008__$1))
{var c__4314__auto___59009 = cljs.core.chunk_first.call(null,seq__58994_59008__$1);{
var G__59010 = cljs.core.chunk_rest.call(null,seq__58994_59008__$1);
var G__59011 = c__4314__auto___59009;
var G__59012 = cljs.core.count.call(null,c__4314__auto___59009);
var G__59013 = (0);
seq__58994_58998 = G__59010;
chunk__58995_58999 = G__59011;
count__58996_59000 = G__59012;
i__58997_59001 = G__59013;
continue;
}
} else
{var node_59014 = cljs.core.first.call(null,seq__58994_59008__$1);goog.dom.classes.add(node_59014,class$);
{
var G__59015 = cljs.core.next.call(null,seq__58994_59008__$1);
var G__59016 = null;
var G__59017 = (0);
var G__59018 = (0);
seq__58994_58998 = G__59015;
chunk__58995_58999 = G__59016;
count__58996_59000 = G__59017;
i__58997_59001 = G__59018;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__59023_59027 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59024_59028 = null;var count__59025_59029 = (0);var i__59026_59030 = (0);while(true){
if((i__59026_59030 < count__59025_59029))
{var node_59031 = cljs.core._nth.call(null,chunk__59024_59028,i__59026_59030);goog.dom.classes.remove(node_59031,class$);
{
var G__59032 = seq__59023_59027;
var G__59033 = chunk__59024_59028;
var G__59034 = count__59025_59029;
var G__59035 = (i__59026_59030 + (1));
seq__59023_59027 = G__59032;
chunk__59024_59028 = G__59033;
count__59025_59029 = G__59034;
i__59026_59030 = G__59035;
continue;
}
} else
{var temp__4126__auto___59036 = cljs.core.seq.call(null,seq__59023_59027);if(temp__4126__auto___59036)
{var seq__59023_59037__$1 = temp__4126__auto___59036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59023_59037__$1))
{var c__4314__auto___59038 = cljs.core.chunk_first.call(null,seq__59023_59037__$1);{
var G__59039 = cljs.core.chunk_rest.call(null,seq__59023_59037__$1);
var G__59040 = c__4314__auto___59038;
var G__59041 = cljs.core.count.call(null,c__4314__auto___59038);
var G__59042 = (0);
seq__59023_59027 = G__59039;
chunk__59024_59028 = G__59040;
count__59025_59029 = G__59041;
i__59026_59030 = G__59042;
continue;
}
} else
{var node_59043 = cljs.core.first.call(null,seq__59023_59037__$1);goog.dom.classes.remove(node_59043,class$);
{
var G__59044 = cljs.core.next.call(null,seq__59023_59037__$1);
var G__59045 = null;
var G__59046 = (0);
var G__59047 = (0);
seq__59023_59027 = G__59044;
chunk__59024_59028 = G__59045;
count__59025_59029 = G__59046;
i__59026_59030 = G__59047;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__59052_59056 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59053_59057 = null;var count__59054_59058 = (0);var i__59055_59059 = (0);while(true){
if((i__59055_59059 < count__59054_59058))
{var node_59060 = cljs.core._nth.call(null,chunk__59053_59057,i__59055_59059);goog.dom.classes.toggle(node_59060,class$);
{
var G__59061 = seq__59052_59056;
var G__59062 = chunk__59053_59057;
var G__59063 = count__59054_59058;
var G__59064 = (i__59055_59059 + (1));
seq__59052_59056 = G__59061;
chunk__59053_59057 = G__59062;
count__59054_59058 = G__59063;
i__59055_59059 = G__59064;
continue;
}
} else
{var temp__4126__auto___59065 = cljs.core.seq.call(null,seq__59052_59056);if(temp__4126__auto___59065)
{var seq__59052_59066__$1 = temp__4126__auto___59065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59052_59066__$1))
{var c__4314__auto___59067 = cljs.core.chunk_first.call(null,seq__59052_59066__$1);{
var G__59068 = cljs.core.chunk_rest.call(null,seq__59052_59066__$1);
var G__59069 = c__4314__auto___59067;
var G__59070 = cljs.core.count.call(null,c__4314__auto___59067);
var G__59071 = (0);
seq__59052_59056 = G__59068;
chunk__59053_59057 = G__59069;
count__59054_59058 = G__59070;
i__59055_59059 = G__59071;
continue;
}
} else
{var node_59072 = cljs.core.first.call(null,seq__59052_59066__$1);goog.dom.classes.toggle(node_59072,class$);
{
var G__59073 = cljs.core.next.call(null,seq__59052_59066__$1);
var G__59074 = null;
var G__59075 = (0);
var G__59076 = (0);
seq__59052_59056 = G__59073;
chunk__59053_59057 = G__59074;
count__59054_59058 = G__59075;
i__59055_59059 = G__59076;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_59085__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__59081_59086 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59082_59087 = null;var count__59083_59088 = (0);var i__59084_59089 = (0);while(true){
if((i__59084_59089 < count__59083_59088))
{var node_59090 = cljs.core._nth.call(null,chunk__59082_59087,i__59084_59089);goog.dom.classes.set(node_59090,classes_59085__$1);
{
var G__59091 = seq__59081_59086;
var G__59092 = chunk__59082_59087;
var G__59093 = count__59083_59088;
var G__59094 = (i__59084_59089 + (1));
seq__59081_59086 = G__59091;
chunk__59082_59087 = G__59092;
count__59083_59088 = G__59093;
i__59084_59089 = G__59094;
continue;
}
} else
{var temp__4126__auto___59095 = cljs.core.seq.call(null,seq__59081_59086);if(temp__4126__auto___59095)
{var seq__59081_59096__$1 = temp__4126__auto___59095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59081_59096__$1))
{var c__4314__auto___59097 = cljs.core.chunk_first.call(null,seq__59081_59096__$1);{
var G__59098 = cljs.core.chunk_rest.call(null,seq__59081_59096__$1);
var G__59099 = c__4314__auto___59097;
var G__59100 = cljs.core.count.call(null,c__4314__auto___59097);
var G__59101 = (0);
seq__59081_59086 = G__59098;
chunk__59082_59087 = G__59099;
count__59083_59088 = G__59100;
i__59084_59089 = G__59101;
continue;
}
} else
{var node_59102 = cljs.core.first.call(null,seq__59081_59096__$1);goog.dom.classes.set(node_59102,classes_59085__$1);
{
var G__59103 = cljs.core.next.call(null,seq__59081_59096__$1);
var G__59104 = null;
var G__59105 = (0);
var G__59106 = (0);
seq__59081_59086 = G__59103;
chunk__59082_59087 = G__59104;
count__59083_59088 = G__59105;
i__59084_59089 = G__59106;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__59111_59115 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59112_59116 = null;var count__59113_59117 = (0);var i__59114_59118 = (0);while(true){
if((i__59114_59118 < count__59113_59117))
{var node_59119 = cljs.core._nth.call(null,chunk__59112_59116,i__59114_59118);goog.dom.setTextContent(node_59119,value);
{
var G__59120 = seq__59111_59115;
var G__59121 = chunk__59112_59116;
var G__59122 = count__59113_59117;
var G__59123 = (i__59114_59118 + (1));
seq__59111_59115 = G__59120;
chunk__59112_59116 = G__59121;
count__59113_59117 = G__59122;
i__59114_59118 = G__59123;
continue;
}
} else
{var temp__4126__auto___59124 = cljs.core.seq.call(null,seq__59111_59115);if(temp__4126__auto___59124)
{var seq__59111_59125__$1 = temp__4126__auto___59124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59111_59125__$1))
{var c__4314__auto___59126 = cljs.core.chunk_first.call(null,seq__59111_59125__$1);{
var G__59127 = cljs.core.chunk_rest.call(null,seq__59111_59125__$1);
var G__59128 = c__4314__auto___59126;
var G__59129 = cljs.core.count.call(null,c__4314__auto___59126);
var G__59130 = (0);
seq__59111_59115 = G__59127;
chunk__59112_59116 = G__59128;
count__59113_59117 = G__59129;
i__59114_59118 = G__59130;
continue;
}
} else
{var node_59131 = cljs.core.first.call(null,seq__59111_59125__$1);goog.dom.setTextContent(node_59131,value);
{
var G__59132 = cljs.core.next.call(null,seq__59111_59125__$1);
var G__59133 = null;
var G__59134 = (0);
var G__59135 = (0);
seq__59111_59115 = G__59132;
chunk__59112_59116 = G__59133;
count__59113_59117 = G__59134;
i__59114_59118 = G__59135;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__59140_59144 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59141_59145 = null;var count__59142_59146 = (0);var i__59143_59147 = (0);while(true){
if((i__59143_59147 < count__59142_59146))
{var node_59148 = cljs.core._nth.call(null,chunk__59141_59145,i__59143_59147);goog.dom.forms.setValue(node_59148,value);
{
var G__59149 = seq__59140_59144;
var G__59150 = chunk__59141_59145;
var G__59151 = count__59142_59146;
var G__59152 = (i__59143_59147 + (1));
seq__59140_59144 = G__59149;
chunk__59141_59145 = G__59150;
count__59142_59146 = G__59151;
i__59143_59147 = G__59152;
continue;
}
} else
{var temp__4126__auto___59153 = cljs.core.seq.call(null,seq__59140_59144);if(temp__4126__auto___59153)
{var seq__59140_59154__$1 = temp__4126__auto___59153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59140_59154__$1))
{var c__4314__auto___59155 = cljs.core.chunk_first.call(null,seq__59140_59154__$1);{
var G__59156 = cljs.core.chunk_rest.call(null,seq__59140_59154__$1);
var G__59157 = c__4314__auto___59155;
var G__59158 = cljs.core.count.call(null,c__4314__auto___59155);
var G__59159 = (0);
seq__59140_59144 = G__59156;
chunk__59141_59145 = G__59157;
count__59142_59146 = G__59158;
i__59143_59147 = G__59159;
continue;
}
} else
{var node_59160 = cljs.core.first.call(null,seq__59140_59154__$1);goog.dom.forms.setValue(node_59160,value);
{
var G__59161 = cljs.core.next.call(null,seq__59140_59154__$1);
var G__59162 = null;
var G__59163 = (0);
var G__59164 = (0);
seq__59140_59144 = G__59161;
chunk__59141_59145 = G__59162;
count__59142_59146 = G__59163;
i__59143_59147 = G__59164;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_59175 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__59171_59176 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59172_59177 = null;var count__59173_59178 = (0);var i__59174_59179 = (0);while(true){
if((i__59174_59179 < count__59173_59178))
{var node_59180 = cljs.core._nth.call(null,chunk__59172_59177,i__59174_59179);node_59180.innerHTML = value_59175;
{
var G__59181 = seq__59171_59176;
var G__59182 = chunk__59172_59177;
var G__59183 = count__59173_59178;
var G__59184 = (i__59174_59179 + (1));
seq__59171_59176 = G__59181;
chunk__59172_59177 = G__59182;
count__59173_59178 = G__59183;
i__59174_59179 = G__59184;
continue;
}
} else
{var temp__4126__auto___59185 = cljs.core.seq.call(null,seq__59171_59176);if(temp__4126__auto___59185)
{var seq__59171_59186__$1 = temp__4126__auto___59185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59171_59186__$1))
{var c__4314__auto___59187 = cljs.core.chunk_first.call(null,seq__59171_59186__$1);{
var G__59188 = cljs.core.chunk_rest.call(null,seq__59171_59186__$1);
var G__59189 = c__4314__auto___59187;
var G__59190 = cljs.core.count.call(null,c__4314__auto___59187);
var G__59191 = (0);
seq__59171_59176 = G__59188;
chunk__59172_59177 = G__59189;
count__59173_59178 = G__59190;
i__59174_59179 = G__59191;
continue;
}
} else
{var node_59192 = cljs.core.first.call(null,seq__59171_59186__$1);node_59192.innerHTML = value_59175;
{
var G__59193 = cljs.core.next.call(null,seq__59171_59186__$1);
var G__59194 = null;
var G__59195 = (0);
var G__59196 = (0);
seq__59171_59176 = G__59193;
chunk__59172_59177 = G__59194;
count__59173_59178 = G__59195;
i__59174_59179 = G__59196;
continue;
}
}
} else
{}
}
break;
}
}catch (e59170){if((e59170 instanceof Error))
{var e_59197 = e59170;domina.replace_children_BANG_.call(null,content,value_59175);
} else
{throw e59170;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__59204_59208 = cljs.core.seq.call(null,children);var chunk__59205_59209 = null;var count__59206_59210 = (0);var i__59207_59211 = (0);while(true){
if((i__59207_59211 < count__59206_59210))
{var child_59212 = cljs.core._nth.call(null,chunk__59205_59209,i__59207_59211);frag.appendChild(child_59212);
{
var G__59213 = seq__59204_59208;
var G__59214 = chunk__59205_59209;
var G__59215 = count__59206_59210;
var G__59216 = (i__59207_59211 + (1));
seq__59204_59208 = G__59213;
chunk__59205_59209 = G__59214;
count__59206_59210 = G__59215;
i__59207_59211 = G__59216;
continue;
}
} else
{var temp__4126__auto___59217 = cljs.core.seq.call(null,seq__59204_59208);if(temp__4126__auto___59217)
{var seq__59204_59218__$1 = temp__4126__auto___59217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59204_59218__$1))
{var c__4314__auto___59219 = cljs.core.chunk_first.call(null,seq__59204_59218__$1);{
var G__59220 = cljs.core.chunk_rest.call(null,seq__59204_59218__$1);
var G__59221 = c__4314__auto___59219;
var G__59222 = cljs.core.count.call(null,c__4314__auto___59219);
var G__59223 = (0);
seq__59204_59208 = G__59220;
chunk__59205_59209 = G__59221;
count__59206_59210 = G__59222;
i__59207_59211 = G__59223;
continue;
}
} else
{var child_59224 = cljs.core.first.call(null,seq__59204_59218__$1);frag.appendChild(child_59224);
{
var G__59225 = cljs.core.next.call(null,seq__59204_59218__$1);
var G__59226 = null;
var G__59227 = (0);
var G__59228 = (0);
seq__59204_59208 = G__59225;
chunk__59205_59209 = G__59226;
count__59206_59210 = G__59227;
i__59207_59211 = G__59228;
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
return (function (p1__59198_SHARP_,p2__59199_SHARP_){return f.call(null,p1__59198_SHARP_,p2__59199_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__59230 = list_thing;if(G__59230)
{var bit__4208__auto__ = (G__59230.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__59230.cljs$core$ISeqable$))
{return true;
} else
{if((!G__59230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59230);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__59231 = content;if(G__59231)
{var bit__4208__auto__ = (G__59231.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__59231.cljs$core$ISeqable$))
{return true;
} else
{if((!G__59231.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59231);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__59232 = content;if(G__59232)
{var bit__4208__auto__ = (G__59232.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__59232.cljs$core$ISeqable$))
{return true;
} else
{if((!G__59232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__59232);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

//# sourceMappingURL=domina.js.map